import { Router } from "express";
import {createQuiz} from "../Controllers/CreateQuiz.controller.js";
import isLoggedIn from "../Middlewares/isLoggedIn.middleware.js";
const createRouter=Router();

createRouter.post("/create-quiz",isLoggedIn,createQuiz)

export default createRouter;