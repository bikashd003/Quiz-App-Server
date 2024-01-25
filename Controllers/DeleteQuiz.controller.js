import quizSchema from "../Models/Quiz.models.js"
import pollSchema from "../Models/Poll.models.js"
import adminSchema from "../Models/Admin.models.js"
import errorHandler from "../Middleware/ApiError.middleware.js"
const deleteQuiz = async (req, res) => {
    const { quizId, quizType } = req.body;
    try {
        if (!quizId || !quizType) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        let deletedQuiz;
        let updateField;
        if (quizType === "Q&A") {
            deletedQuiz = await quizSchema.findByIdAndDelete(quizId);
            updateField = 'createdQuiz';
        } else if (quizType === "Poll Type") {
            deletedQuiz = await pollSchema.findByIdAndDelete(quizId);
            updateField = 'createdPoll';
        } else {
            return res.status(422).json({ message: "Invalid quizType" });
        }

        if (!deletedQuiz) {
            return res.status(404).json({ message: "Quiz not found" });
        }

        await adminSchema.findByIdAndUpdate(
            { _id: req.admin._id },
            { $pull: { updateField: quizId } }
        );

        res.status(200).json({ message: "Quiz deleted successfully" });

    } catch (error) {
        errorHandler(res, error);
    }
};

export default deleteQuiz;
