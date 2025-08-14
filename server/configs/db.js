import { neon } from "@neondatabase/serverless";
import "dotenv/config";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in .env file");
}

const sql = neon(process.env.DATABASE_URL);

export default sql;
