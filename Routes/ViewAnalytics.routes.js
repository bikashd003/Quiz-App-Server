import { Router } from "express"
import viewQuiz from "../Controllers/ViewAnalytics.controller.js";
import isLoggedIn from "../Middleware/Auth.middleware.js"
const viewQuizRouter = Router();

viewQuizRouter.get("/view-quiz",isLoggedIn, viewQuiz);
export default viewQuizRouter;