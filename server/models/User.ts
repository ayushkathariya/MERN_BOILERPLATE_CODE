import mongoose, { Document } from "mongoose";

interface userSchemaInterface extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<userSchemaInterface>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<userSchemaInterface>("users", userSchema);
