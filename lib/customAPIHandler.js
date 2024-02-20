import { connectDBMiddleware } from "@/middlewares/dbMiddleware";

// customAPIHandler.js
export default function customAPIHandler(handler) {
  return async (req, res) => {
    try {
      await connectDBMiddleware(req, res);
      await handler(req, res);
    } catch (error) {
      console.error('Error in API route:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
}
