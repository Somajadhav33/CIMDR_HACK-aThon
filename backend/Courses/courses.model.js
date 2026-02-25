import mongoose from "mongoose";

const CourseRegister = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Mob: {
      type: String,
      required: true,
      unique: true,
    },
    Address: {
      type: String,
      required: true,
    },
    Marks: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    Course: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const CourseDetails = mongoose.model("CourseRegister", CourseRegister);

export { CourseDetails };
