import mongoose from "mongoose";
import { DB_URI,NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error("DB_URI is not defined");
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("Connected to database");
    } catch (error) {
        console.log("Error connecting to database", error);
    }
};
export default connectToDatabase;
