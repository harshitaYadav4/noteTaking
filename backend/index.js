import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import noteRoutes from './router/note.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//database connection
try {
    mongoose.connect(process.env.MONGO_URI)
    console.log("Database connected successfully");

} catch (error) {
    console.log("error to connect database", error);
}

//routing
app.use(express.json());
app.use("/api/V1/noteapp", noteRoutes);
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

