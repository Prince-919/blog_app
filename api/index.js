import express from "express";
import dbConnect from "./config/db.js";
import { config } from "./config/config.js";
import userRoute from "./user/userRoute.js";
import authRoute from "./auth/authRoute.js";
import globalError from "./middlewares/globalError.js";
import cookieParser from "cookie-parser";
import postRoute from "./post/postRoute.js";
import commentRoute from "./comment/commentRoute.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
// Routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/comment", commentRoute);

const serverStart = async () => {
  await dbConnect();

  const port = config.port || 8000;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

serverStart();

app.use(globalError);
