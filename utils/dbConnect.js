import mongoose from "mongoose";
export default dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose.connect(process.env.DB_URI);
  console.log("db connected succesfully");
};
