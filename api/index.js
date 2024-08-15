import express from "express";
import dbConnect from "./config/db.js";
import { config } from "./config/config.js";

const app = express();

const serverStart = async () => {
  await dbConnect();

  const port = config.port || 8000;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

serverStart();
