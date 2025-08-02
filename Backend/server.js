import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieparser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js';
import noteRoutes from './routes/noteRoutes.js'

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieparser())

app.use("/api/auth", authRoutes);
app.use('/api/notes', noteRoutes);

app.get("/", (req, res) => {
  res.send("Notes");
});

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(4000, () => {
      console.log("server running on port 4000");
    });
  })
  .catch((err) => console.log("Mongo Error", err));
