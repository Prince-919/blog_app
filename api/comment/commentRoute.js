import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import {
  createComment,
<<<<<<< HEAD
  deleteComment,
=======
>>>>>>> cace9e5754f3067d1c7f2a96be278b3bb7824572
  editComment,
  getPostComments,
  likeComment,
} from "./commentController.js";

const router = express.Router();

router.post("/create", verifyUser, createComment);
router.get("/getpostcomments/:postId", getPostComments);
router.put("/likecomment/:commentId", verifyUser, likeComment);
router.put("/editcomment/:commentId", verifyUser, editComment);
<<<<<<< HEAD
router.delete("/deletecomment/:commentId", verifyUser, deleteComment);
=======
>>>>>>> cace9e5754f3067d1c7f2a96be278b3bb7824572

export default router;
