import quizSchema from "../Models/Quiz.models.js"
import adminSchema from "../Models/Admin.models.js"

export const createQuiz = async (req, res) => {
    const { quizTitle, quizType, questions } = req.body;
    try {
        const quiz = new quizSchema({ quizTitle, quizType, questions });
        const savedQuiz = await quiz.save();
        await adminSchema.findOneAndUpdate(
            { _id: req.admin._id },
            { $addToSet: { createdQuiz: savedQuiz._id } }
        )
        res.status(201).json(quiz);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
