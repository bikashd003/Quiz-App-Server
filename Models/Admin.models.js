import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdQuiz:[
        {
            type: Schema.Types.ObjectId,
            ref: "Quiz"
        }
    ],
    createdPoll:[
        {
            type: Schema.Types.ObjectId,
            ref: "Poll"
        }
    ]
}
    , { timestamps: true });

export default mongoose.model("Admin", adminSchema)