import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI as string);
    console.log("🚀 ~ Database connected:", connect.connection.host);
  } catch (error) {
    process.exit(1);
  }
};

export default connectDb;
