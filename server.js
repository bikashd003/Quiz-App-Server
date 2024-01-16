import express from 'express';
import dotenv from 'dotenv';
import connectDb from "./Database/Db.js"
dotenv.config({ path: "./.env" });
import cors from 'cors';



const app = express();
app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
    res.status(200).json({
        serverTime: new Date().toLocaleString(),
        serverName: 'job portal server',
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
