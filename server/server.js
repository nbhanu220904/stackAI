import express from "express";
import cors from "cors";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import aiRouter from "./routes/aiRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";

import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
dotenv.config();

const app = express();

await connectCloudinary();
app.use(cors());
app.use(express.json()); //by using this line all the request methods will be used by the json method
app.use(clerkMiddleware());

app.get("/", async (req, res) => {
  res.send("StackAI Backend Server is Live Now!...");
});

app.use(requireAuth());

app.use("/api/ai", aiRouter);
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 8080;

app
  .listen(PORT, () => {
    console.log("====================================");
    console.log(`Backend Server is Running on port http://localhost:${PORT}`);
    console.log("====================================");
  })
  .on("error", (err) => {
    console.error("Server error:", err);
  });
