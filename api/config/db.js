import mongoose from "mongoose";
import { config } from "./config.js";

const dbConnect = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to database successfully");
    });
    mongoose.connection.on("error", (err) => {
      console.log("Error in connecting database", err);
    });

    await mongoose.connect(config.databaseUrl);
  } catch (err) {
    console.log("Failed to connnect to database", err);
    process.exit(1);
  }
};

export default dbConnect;
