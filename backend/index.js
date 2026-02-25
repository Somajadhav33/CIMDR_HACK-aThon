import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { CourseRouter } from "./Courses/course.route.js";
import cookieParser from "cookie-parser";

const app = express();
const port = 3001;

const connectDb = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/cimdrproject");
  console.log("db connected");
};

connectDb();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("working");
});

app.use(CourseRouter);

app.listen(port, () => {
  console.log("server started");
});
