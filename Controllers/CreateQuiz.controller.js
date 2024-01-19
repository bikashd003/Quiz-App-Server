import quizSchema from "../Models/Quiz.models.js"


export const createQuiz = async (req, res) => {
    const { title, type, questions } = req.body;
    try {
        const quiz = new quizSchema({ quizTitle: title, quizType: type, questions: questions });
        await quiz.save();
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
