import errorHandler from "../Middleware/ApiError.middleware.js";
import pollSchema from "../Models/Poll.models.js"
import adminSchema from "../Models/Admin.models.js"

const createPoll = async (req, res) => {
    const { quizTitle, quizType, polls } = req.body;
    try {
        const poll = new pollSchema({ quizTitle, quizType, polls });
        const savedPoll = await poll.save();
        await adminSchema.findByIdAndUpdate(
            { _id: req.admin._id },
            { $addToSet: { createdPoll: savedPoll._id }
            });
        res.status(201).json(poll);
    } catch (error) {
        errorHandler(res, error);
    }
}

export default createPoll;