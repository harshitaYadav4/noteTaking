import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});