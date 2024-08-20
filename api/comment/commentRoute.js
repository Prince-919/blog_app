import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import {
  createComment,
  editComment,
  getPostComments,
  likeComment,
} from "./commentController.js";

const router = express.Router();

router.post("/create", verifyUser, createComment);
router.get("/getpostcomments/:postId", getPostComments);
router.put("/likecomment/:commentId", verifyUser, likeComment);
router.put("/editcomment/:commentId", verifyUser, editComment);

export default router;
