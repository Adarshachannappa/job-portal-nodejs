import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB: " + mongoose.connection.host);
  } catch (error) {
    console.log("MongoDB not connected..!", error);
  }
};

export default connectDB;
