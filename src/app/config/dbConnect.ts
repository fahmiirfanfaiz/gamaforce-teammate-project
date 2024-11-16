import mongoose from "mongoose";

/**
 * Connects to MongoDB using the URI from environment variables.
 * Handles errors and logs connection events.
 */
const connectMongoDB = async (): Promise<void> => {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    console.error("Error: MONGODB_URI is not defined in environment variables.");
    process.exit(1); // Exit if URI is missing
  }

  try {
    await mongoose.connect(MONGODB_URI); // Simplified for Mongoose 6+
    console.log("Successfully connected to MongoDB");

    // Connection event listeners
    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to MongoDB");
    });

    mongoose.connection.on("error", (err) => {
      console.error("Mongoose connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("Mongoose disconnected from MongoDB");
    });
  } catch (err) {
    console.error("Critical error connecting to MongoDB:", err);
    process.exit(1); // Exit if initial connection fails
  }
};

export default connectMongoDB;
