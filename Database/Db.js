import mongoose from 'mongoose';
const Db_Name = "Quiz_App";

const connectDb = async () => {

    try {
        const connect = await mongoose.connect(`${process.env.DB_URI}/${Db_Name}`)
        console.log(`Database Connected`);
    } catch (error) {
        console.log("Database connection error", error);
        process.exit(1);
    }
}

export default connectDb;