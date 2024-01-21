import pollSchema from "../Models/Poll.models.js";
import quizSchema from "../Models/Quiz.models.js";
import errorHandler from "../Middleware/ApiError.middleware.js";

const takeQuiz = async (req, res) => {
  const { quizId } = req.params;
  try {
    const quiz = await quizSchema.findById(quizId);
    const poll = await pollSchema.findById(quizId);

    if (quiz) {
      res.status(200).json(quiz);
    } else if (poll) {
      res.status(200).json(poll);
    } else {
      res.status(404).json({ message: "QuizId not found" });
    }
  } catch (error) {
    errorHandler(res, error);
  }
};

export default takeQuiz;
