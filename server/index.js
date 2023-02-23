import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGODB_URL, () => {
//   console.log('Connected to MongoDB Database');
// });

mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log('connected to the database');
  });

  app.get("/ping",(req,res)=>{
    res.json("pong")
  })





app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});