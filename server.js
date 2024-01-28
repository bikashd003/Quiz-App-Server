import express from 'express';
import dotenv from 'dotenv';
import connectDb from "./Database/Db.js"
dotenv.config({ path: "./.env" });
import cors from 'cors';
import adminRouter from './Routes/Admin.routes.js';
import createRouter from './Routes/CreateQuiz.routes.js';
import createPollRouter from './Routes/CreatePoll.routes.js';
import takeQuizRouter from './Routes/TakeQuiz.routes.js';
import viewQuizRouter from "./Routes/ViewAnalytics.routes.js"
import deleteRouter from './Routes/DeleteQuiz.routes.js';
import countImpressionRouter from './Routes/CountImpression.routes.js';
import attemptRouter from './Routes/SaveUserAttempt.routes.js';
import updateRouter from './Routes/UpdateQuiz.routes.js';




const app = express();
app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
    res.status(200).json({
        serverTime: new Date().toLocaleString(),
        serverName: 'quiz app',
    })
})


connectDb()
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on port ${process.env.PORT || 5000}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB connection error", err)
    })
app.use('/api', adminRouter);
app.use("/api", createRouter);
app.use("/api", createPollRouter)
app.use("/api", takeQuizRouter);
app.use("/api", viewQuizRouter);
app.use("/api", deleteRouter);
app.use("/api", countImpressionRouter);
app.use("/api",attemptRouter)
app.use("/api",updateRouter)