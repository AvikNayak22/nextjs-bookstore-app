import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const connection = await mongoose.connect(String(process.env.MONGO_URL));
    console.log("Connected to mongodb ");

    return connection;
  } catch (err) {
    console.error(err);
  }
}
