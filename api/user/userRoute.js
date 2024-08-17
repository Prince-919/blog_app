import express from "express";
import { testController, updateUser } from "./userController.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", testController);
router.put("/update/:userId", verifyUser, updateUser);

export default router;
