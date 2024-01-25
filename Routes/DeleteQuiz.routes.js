import { Router } from 'express';
import deleteQuiz from '../Controllers/DeleteQuiz.controller.js';
import isLoggedIn from "../Middleware/Auth.middleware.js"
const deleteRouter = Router();

deleteRouter.post('/delete-quiz', isLoggedIn, deleteQuiz)
export default deleteRouter;