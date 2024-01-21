import {Router} from "express";
import takeQuiz from "../Controllers/TakeQuiz.controller.js";
const takeQuizRouter=Router();

takeQuizRouter.get("/quiz/:quizId",takeQuiz);

export default takeQuizRouter;