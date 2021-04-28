import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require("dotenv").config();

export const registerHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!process.env.SECRET) {
      throw new Error("Environment Invalid");
    }

    const { name, email, password } = req.body;

    const exisitngUser = await User.findOne({ email });

    if (exisitngUser) {
      return res.json({
        message: "User already Exists",
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    let user = new User({
      name,
      email,
      password: hashedPass,
      // rating: 0,
    });

    user = await user.save();

    res.status(200).json({
      message: "User Created Succesfully",
    });
  } catch (err) {
    next(err);
  }
};
export const loginHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!process.env.SECRET) {
      throw new Error("Environment Unavailable");
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        message: "User does not exist",
      });
    }

    const check = await bcrypt.compare(password, user.password);

    if (!check) {
      return res.status(401).json({
        message: "Auth Failed",
      });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      process.env.SECRET
    );

    res.status(200).send({
      token,
    });
  } catch (err) {
    next(err);
  }
};
