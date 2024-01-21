import { Router } from "express";
import isLoggedIn from "../Middleware/Auth.middleware.js";
import createPoll from '../Controllers/CreatePoll.controller.js'
const createPollRouter=Router();

createPollRouter.post("/create-poll",isLoggedIn,createPoll)

export default createPollRouter;