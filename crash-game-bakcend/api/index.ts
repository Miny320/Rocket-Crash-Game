import express, { Application, Request, Response } from "express";
import cors from "cors";
import { connectDB } from "../src/config/db";

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: "OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

// Connect to database
connectDB();

// Basic health check
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ 
    message: "Rocket Crash Game Backend API is running on Vercel",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/health", (req: Request, res: Response) => {
  res.status(200).json({ 
    status: "healthy",
    service: "rocket-crash-game-api",
    timestamp: new Date().toISOString()
  });
});

// Import and use routes (without Socket.IO functionality)
try {
  // Note: You'll need to create API-only versions of your routes
  // that don't depend on Socket.IO for real-time features
  app.use("/api", (req: Request, res: Response) => {
    res.status(200).json({ 
      message: "API routes not yet implemented for serverless deployment",
      note: "Socket.IO features require persistent connections - consider Railway or Render for full functionality"
    });
  });
} catch (error) {
  console.log("Routes not available in this setup");
}

export default app;
