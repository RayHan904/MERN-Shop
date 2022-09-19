import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      typs: String,
      required: true,
    },
    email: {
      typs: String,
      required: true,
      unique: true,
    },
    password: {
      typs: String,
      required: true,
    },
    isAdmin: {
      typs: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

export default User;
