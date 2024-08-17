import { config } from "../config/config.js";
import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorHandler(401, "Unauthorized"));
  }
  jwt.verify(token, config.jwtSecret, (err, user) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized"));
    }
    req.user = user;
    next();
  });
};
