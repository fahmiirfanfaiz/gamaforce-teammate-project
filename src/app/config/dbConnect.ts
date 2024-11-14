// src/app/config/dbConnect.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI); 
    console.log("Connected to MongoDB ");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

export default connectMongoDB;
