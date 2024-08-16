import User from "../user/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.json({ message: "Signup Successful" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(404, "Invalid email or password"));
    }

    const comparePassword = bcryptjs.compareSync(password, user.password);
    if (!comparePassword) {
      return next(errorHandler(400, "Invalid email or password"));
    }

    const token = await jwt.sign({ id: user._id }, config.jwtSecret);

    const { password: pass, ...rest } = user._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
