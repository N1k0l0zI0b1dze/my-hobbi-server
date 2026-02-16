import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import hobbyRouter from "./routes/hobbyRoutes.js";

dotenv.config();

const app = express();
const PORT = 4000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
// res.json({ status: "ok", message: "Server is running" });
// });

// app.get("/my-hobby", (req, res) => {
// res.json({ hobby: "ლაშქრობა და ცხენებით სეირნობა" });
// });

app.use("/api/hobbies", hobbyRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
