import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI as string;

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
