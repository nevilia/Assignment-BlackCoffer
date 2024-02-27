import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI as string;

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

const PORT = process.env.PORT ;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
