import { Router } from 'express';
import { updateQuiz, updatePoll } from '../Controllers/UpdateQuiz.controller.js';
import isLoggedIn from '../Middleware/Auth.middleware.js';
const updateRouter = Router();

updateRouter.put('/update-quiz/', isLoggedIn, updateQuiz);
updateRouter.put('/update-poll/', isLoggedIn, updatePoll);
export default updateRouter;