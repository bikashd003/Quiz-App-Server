import quizSchema from "../Models/Quiz.models.js"
import pollSchema from "../Models/Poll.models.js"
import adminSchema from "../Models/Admin.models.js"
import errorHandler from "../Middleware/ApiError.middleware.js"
const viewQuiz = async (req, res) => {
    const adminId = req.admin._id;
    try {
        const quiz = await adminSchema.findById(adminId).populate("createdQuiz")
        const poll = await adminSchema.findById(adminId).populate("createdPoll")
        const quizzes = quiz.createdQuiz;
        const polls = poll.createdPoll;
        const allDetails = [...quizzes, ...polls]
        allDetails.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        res.status(200).json(allDetails);
    } catch (error) {
        errorHandler(res, error)
    }
}
export default viewQuiz;