import mongoose from "mongoose";

const pollOptionSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  attempts: {
    type: Number,
    default: 0,
  },
});

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  optionType:{
    type: String,
    required: true,
  },
  options: {
    type: [pollOptionSchema],
    required: true,
  },
});

const pollSchema = new mongoose.Schema({
  quizTitle: {
    type: String,
    required: true,
  },
  quizType: {
    type: String,
    required: true,
  },
  impression:{
    type: Number,
  },
  polls: {
    type: [questionSchema],
    required: true,
  },
}, { timestamps: true });

export default mongoose.model("Poll", pollSchema);

