import errorHandler from '../Middleware/ApiError.middleware.js';
import quizSchema from '../Models/Quiz.models.js';
import pollSchema from '../Models/Poll.models.js';

const saveUserAttempts = async (req, res) => {
  const { quizId, userAnswers } = req.body;

  try {
    const quiz = await quizSchema.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    quiz.questions.forEach((question, index) => {
      const userSelectedIndex = userAnswers[index];

      if (userSelectedIndex !== undefined && userSelectedIndex !=="") {
        const isCorrect = userSelectedIndex == question.correctOption;
        question.userAttempt++;

        if (isCorrect) {
          question.correctedAttempt++;
        } else {
          question.inCorrectedAttempt++;
        }
      }
    });

    await quiz.save();

    res.json({ message: 'User attempts saved successfully' });
  } catch (error) {
    errorHandler(res, error);
  }
};
const saveUserPollAttempts = async (req, res) => {
    const { quizId, userAnswers } = req.body;
  
    try {
      const quiz = await pollSchema.findById(quizId);
  
      if (!quiz) {
        return res.status(404).json({ error: 'Quiz not found' });
      }
  
      quiz.polls.forEach((poll, pollIndex) => {
        const userSelectedOptionIndex = userAnswers[pollIndex];
  
        if (userSelectedOptionIndex !== undefined && userSelectedOptionIndex !== "") {
          quiz.polls[pollIndex].options[userSelectedOptionIndex].attempts++;
        }
      });
  
      await quiz.save();
  
      res.json({ message: 'User poll attempts saved successfully' });
    } catch (error) {
      errorHandler(res, error);
    }
  };

export {saveUserAttempts,saveUserPollAttempts};
