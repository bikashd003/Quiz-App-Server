import mongoose from "mongoose";

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
  userAttempt: {
    type: Number,
    default: 0,
  },
  correctedAttempt: {
    type: Number,
    default: 0,
  },
  inCorrectedAttempt: {
    type: Number,
    default: 0,
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
  impression: {
    type: Number,
  },
}, { timestamps: true });

export default mongoose.model("Quiz", quizSchema);
