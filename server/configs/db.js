import { neon } from "@neondatabase/serverless";
import "dotenv/config";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in .env file");
}

const sql = neon(process.env.DATABASE_URL);

export default sql;

// MongoDB Connection

import mongoose from "mongoose";

// if (!process.env.MONGODB_URI) {
//   throw new Error("MONGODB_URI is not set in .env file");
// }

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log("MongoDB connected");
// })
// .catch((err) => {
//   console.error("MongoDB connection error:", err);
// });

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB connected");
  });
};
