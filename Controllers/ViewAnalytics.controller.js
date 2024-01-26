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
const viewQuizAnalysis = async (req, res) => {
    const { quizId } = req.body;
    try {
        const quiz = await quizSchema.findById(quizId)
        const poll = await pollSchema.findById(quizId)
        if (!quiz && !poll) {
            return res.status(400).json({ message: "No quiz found" })
        }
        if (quiz) {
            res.status(200).json(quiz)
        }
        else if (poll) {
            res.status(200).json(poll)
        }
        else {
            res.status(400).json({ message: "No quiz found" })
        }
    }
    catch (error) {
        errorHandler(res, error)
    }

}
const allQuiz = async (req, res) => {
    const adminId = req.admin._id;
    try {
        const quiz = await adminSchema.findById(adminId).populate("createdQuiz");
        const poll = await adminSchema.findById(adminId).populate("createdPoll");

        const quizzes = quiz.createdQuiz;
        const polls = poll.createdPoll;

        const numberOfQAndA = quizzes.map(q => q.questions.length).reduce((total, length) => total + length, 0);
        const numberOfPolls = polls.map(p => p.polls.length).reduce((total, length) => total + length, 0);

        const numberOfQuestions = numberOfQAndA + numberOfPolls;
        const totalImpressions = quizzes.map(q => q.impression).reduce((total, impression) => total + impression, 0) +
            polls.map(p => p.impression).reduce((total, impression) => total + impression, 0);

        const allDetails = [...quizzes, ...polls];
        const trendingQuiz = allDetails.sort((a, b) => b.impression - a.impression);

        res.status(200).json({ allDetails, numberOfQuestions, totalImpressions, trendingQuiz });
    } catch (error) {
        errorHandler(res, error);
    }
};



export { viewQuiz, viewQuizAnalysis, allQuiz };