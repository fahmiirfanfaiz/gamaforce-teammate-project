import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import connectMongoDB from "@/app/config/dbConnect";; // Corrected path

dotenv.config(); // Load environment variables from .env file

const app: Application = express();

// Middleware to parse JSON payloads
app.use(express.json());

// Example route for testing
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running!");
});

// Start the server
const startServer = async (): Promise<void> => {
  try {
    await connectMongoDB(); // Establish the database connection

    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000/api/missions");
    });
  } catch (err) {
    console.error("Critical error during server startup:", err);
    process.exit(1); // Exit with failure if server fails to start
  }
};

startServer();
