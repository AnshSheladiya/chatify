import { connectToDatabase } from "@/lib/db";

// dbMiddleware.js
let isConnected = false;

export const connectDBMiddleware = async (req, res, next) => {
  if (!isConnected) {
    await connectToDatabase();
    isConnected = true;
  }
  next();
};
