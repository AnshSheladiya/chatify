// db.js
import mongoose from 'mongoose';

let isConnected;

const connectToDatabase = async () => {
  if (isConnected) {
    console.log('Using existing database connection');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
    });
    isConnected = db.connections[0].readyState;
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to database:', error.message);
  }
};

export { connectToDatabase };
