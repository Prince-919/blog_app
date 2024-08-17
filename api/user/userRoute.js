import express from "express";
import {
  deleteUser,
  signout,
  testController,
  updateUser,
} from "./userController.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", testController);
router.put("/update/:userId", verifyUser, updateUser);
router.delete("/delete/:userId", verifyUser, deleteUser);
router.post("/signout", signout);

export default router;
