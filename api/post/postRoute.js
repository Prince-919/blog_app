import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import { create } from "./postController.js";

const router = express.Router();
router.post("/create", verifyUser, create);

export default router;
