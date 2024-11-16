import mongoose from "mongoose";

/**
 * Connects to MongoDB using the URI from environment variables.
 * Logs detailed error messages for easier debugging.
 */
const connectMongoDB = async (): Promise<void> => {
  const MONGODB_URI = process.env.MONGODB_URI;

  // Validate the environment variable
  if (!MONGODB_URI) {
    console.error("Error: MONGODB_URI is not defined in environment variables.");
    process.exit(1); // Exit with failure if the URI is missing
  }

  console.log(`Attempting to connect to MongoDB at URI: ${MONGODB_URI}`);

  try {
    await mongoose.connect(MONGODB_URI); // No need to pass options in Mongoose 6+
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error(`Failed to connect to MongoDB. Reason: ${errorMessage}`);
    console.error("Additional Error Info:", err); // Log full error object for debugging
    process.exit(1); // Exit the application if the connection fails
  }
};

export default connectMongoDB;
