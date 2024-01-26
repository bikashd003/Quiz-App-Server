import {Router} from 'express';
const attemptRouter=Router();
import {saveUserAttempts,saveUserPollAttempts} from "../Controllers/SaveUserAttempt.controller.js"

attemptRouter.post("/saveUserAttempts",saveUserAttempts)
attemptRouter.post("/saveUserPollAttempts",saveUserPollAttempts)

export default attemptRouter;