import express from "express";
import dbConnect from "./config/db.js";
import { config } from "./config/config.js";
import userRoute from "./user/userRoute.js";
import authRoute from "./auth/authRoute.js";
import globalError from "./middlewares/globalError.js";

const app = express();

// Middlewares
app.use(express.json());
// Routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

const serverStart = async () => {
  await dbConnect();

  const port = config.port || 8000;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

serverStart();

app.use(globalError);
