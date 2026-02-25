import express from "express";
import { CourseDetails } from "./courses.model.js";

const CourseRouter = express.Router();

CourseRouter.get("/api/getbcaregister", async (req, res) => {
  try {
    const FetchData = await CourseDetails.find({ Course: "BCA" });
    if (FetchData == null) return res.status(400).send("no data found");

    res.status(200).send({ Data: FetchData });
  } catch (error) {
    res.status(400).send("please try again");
  }
});
CourseRouter.get("/api/getmcaregister", async (req, res) => {
  try {
    const FetchData = await CourseDetails.find({ Course: "BCA" });
    if (FetchData == null) return res.status(400).send("no data found");

    res.status(200).send({ Data: FetchData });
  } catch (error) {
    res.status(400).send("please try again");
  }
});
CourseRouter.get("/api/getmbaregister", async (req, res) => {
  try {
    const FetchData = await CourseDetails.find({ Course: "BCA" });
    if (FetchData == null) return res.status(400).send("no data found");

    res.status(200).send({ Data: FetchData });
  } catch (error) {
    res.status(400).send("please try again");
  }
});
CourseRouter.get("/api/getbbaregister", async (req, res) => {
  try {
    const FetchData = await CourseDetails.find({ Course: "BCA" });
    if (FetchData == null) return res.status(400).send("no data found");

    res.status(200).send({ Data: FetchData });
  } catch (error) {
    res.status(400).send("please try again");
  }
});

CourseRouter.post("/api/courseregister", async (req, res) => {
  try {
    let { name, email, mob, address, mark, password, course } = req.body;
    let Create = await CourseDetails.create({
      Name: String(name),
      Address: String(address),
      Email: String(email),
      Mob: String(mob),
      Marks: String(mark),
      password: String(password),
      Course: String(course),
    });
  } catch (error) {
    res.status(400).send("please try again");
  }
});

CourseRouter.post("/api/studentlogin", async (req, res) => {
  let { email, password } = req.body;

  let FindStudent = await CourseDetails.findOne({ Email: email });
  if (FindStudent == null) return res.status(406).send("student not found");
  if (password != FindStudent.password) {
    return res.status(406).send("incorrect password");
  }
  res.cookie("studentid", String(FindStudent._id), {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
    maxAge: 100000000,
    secure: false,
  });
  res.status(201).send("login successfully");
});

export { CourseRouter };
