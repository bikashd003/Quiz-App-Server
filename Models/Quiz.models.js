import mongoose,{Schema} from "mongoose";
const questionSchema=new Schema({
    question:{
        type:String,
        required:true
    },
    options: [
        {
          type: String,
          required: true,
        },
      ],
      correctOptionIndex: {
        type: Number,
        required: true,
      },
      timer: {
        type: Number,
        required: true,
      }

});
const quizSchema=new Schema({
    quizTitle:{
        type:String,
        required:true
    },
    quizType:{
      type:String,
      required:true
    },
    questions: {
      type: [questionSchema],
      required: true,
    },

},{timestamps:true})
export default mongoose.model("Quiz",quizSchema);