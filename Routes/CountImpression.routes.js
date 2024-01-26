import {Router} from 'express';
import countImpression from '../Controllers/CountImpression.controller.js';
const countImpressionRouter=Router();

countImpressionRouter.get('/quiz-impression/:quizId',countImpression)

export default countImpressionRouter;