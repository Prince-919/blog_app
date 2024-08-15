import express from "express";
import dbConnect from "./config/db.js";
import { config } from "./config/config.js";
import userRoute from "./user/userRoute.js";

const app = express();

// Routes
app.use("/api/user", userRoute);

const serverStart = async () => {
  await dbConnect();

  const port = config.port || 8000;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

serverStart();
