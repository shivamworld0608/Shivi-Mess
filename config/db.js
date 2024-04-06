import mongoose from "mongoose";
const connectDB = async()=>{
    try {
        const conn = await mongoose.connect("mongodb+srv://ashishivam2003:3ISY0oY6WEujFsQN@shivi1.st1jks6.mongodb.net/");
        console.log(`Mongo Connected successfully`);
    } catch (error) {
        console.log(`Connection error : ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;