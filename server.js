import express from 'express';
import dotenv from 'dotenv';
import connectDb from "./Database/Db.js"
dotenv.config({ path: "./.env" });
import cors from 'cors';
import adminRouter from './Routes/Admin.routes.js';



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