import express from "express";
import { testController } from "./userController.js";

const router = express.Router();

router.get("/test", testController);

export default router;
