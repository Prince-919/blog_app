import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import {
  createComment,
  deleteComment,
  editComment,
  getComments,
  getPostComments,
  likeComment,
} from "./commentController.js";

const router = express.Router();

router.post("/create", verifyUser, createComment);
router.get("/getpostcomments/:postId", getPostComments);
router.put("/likecomment/:commentId", verifyUser, likeComment);
router.put("/editcomment/:commentId", verifyUser, editComment);
router.delete("/deletecomment/:commentId", verifyUser, deleteComment);
router.get("/getcomments", verifyUser, getComments);

export default router;
