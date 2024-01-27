import { Router } from "express"
import { viewQuiz, viewQuizAnalysis, allQuiz } from "../Controllers/ViewAnalytics.controller.js";
import isLoggedIn from "../Middleware/Auth.middleware.js"
const viewQuizRouter = Router();

viewQuizRouter.get("/view-quiz", isLoggedIn, viewQuiz);
viewQuizRouter.post("/view-quiz-analysis", isLoggedIn, viewQuizAnalysis);
viewQuizRouter.get("/all-quiz", isLoggedIn, allQuiz);
export default viewQuizRouter;