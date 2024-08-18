import express from "express";
import {
  deleteUser,
  getUsers,
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
router.get("/getusers", verifyUser, getUsers);

export default router;
