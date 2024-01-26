import quizSchema from "../Models/Quiz.models.js"
import pollSchema from "../Models/Poll.models.js"
import errorHandler from "../Middleware/ApiError.middleware.js";
const countImpression = async (req, res) => {
    const { quizId } = req.params;

    try {
        const quiz = await quizSchema.findById(quizId);
        const poll = await pollSchema.findById(quizId);
        if (quiz) {
            quiz.impression = (quiz.impression || 0) + 1;
            await quiz.save();
        } else if (poll) {
            poll.impression = (poll.impression || 0) + 1;
            await poll.save();
        } else {
            return res.status(404).json({ error: 'Quiz or Poll not found' });
        }
        res.json({ quizId, impressionCount: quiz?.impression || poll?.impression });
    } catch (error) {
        errorHandler(res, error)
    }

}

export default countImpression;