import errorHandler from "../Middleware/ApiError.middleware.js";
import pollSchema from "../Models/Poll.models.js"
import quizSchema from "../Models/Quiz.models.js"
const updateQuiz = async (req, res) => {
    const { quizTitle, quizType, questions, quizId } = req.body;
    try {
        if (!quizId) {
            res.status(400).json({ message: "Please provide quiz id" })
        }
        const updateQuiz = await quizSchema.findByIdAndUpdate(
            { _id: quizId },
            { quizTitle, quizType, questions },
            { new: true }
        );
        res.status(200).json({
            message: "Quiz Updated Successfully",
            updateQuiz
        })

    }
    catch (err) {
        errorHandler(res, err)
    }

}
const updatePoll = async (req, res) => {
    const { quizTitle, quizType, polls, quizId } = req.body;
    try {
        if (!quizId) {
            res.status(400).json({ message: "Please provide quiz id" })
        }
        const updatePoll = await pollSchema.findByIdAndUpdate(
            { _id: quizId },
            { quizTitle, quizType, polls },
            { new: true }
        );
        res.status(200).json({
            message: "Poll Updated Successfully",
            updatePoll
        })

    }
    catch (err) {
        errorHandler(res, err)
    }

}
export { updateQuiz, updatePoll };