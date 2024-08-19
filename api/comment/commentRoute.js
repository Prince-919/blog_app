import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import { createComment, getPostComments } from "./commentController.js";

const router = express.Router();

router.post("/create", verifyUser, createComment);
router.get("/getpostcomments/:postId", getPostComments);

export default router;
