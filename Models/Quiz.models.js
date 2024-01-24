import mongoose from "mongoose";
const responseSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  selectedOption: {
    type: String,
  },
  isCorrect: {
    type: Boolean,
  },
});
const questionOptionSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  imageURL: {
    type: String,
  },
});

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  options: {
    type: [questionOptionSchema],
    required: true,
  },
  correctOption: {
    type: String,
    required: true,
  },
  timer: {
    type: Number,
    required: true,
  },
});

const quizSchema = new mongoose.Schema({
  quizTitle: {
    type: String,
    required: true,
  },
  quizType: {
    type: String,
    required: true,
  },
  questions: {
    type: [questionSchema],
    required: true,
  },
  responses: {
    type: [responseSchema],
  },
}, { timestamps: true });

export default mongoose.model("Quiz", quizSchema);

