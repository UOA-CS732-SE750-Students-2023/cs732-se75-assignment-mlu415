import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import axios from "axios";
import { config as dotenvConfig } from "dotenv";
import { Request, Response } from "express";
import User from "../models/User";

dotenvConfig();
const jwtSecret = process.env.JWT_SECRET;



export const signinController = async (req: Request, res: Response) => {
  const { email, password, googleAccessToken } = req.body;

  if (googleAccessToken) {
    // Google sign-in flow
    try {
      const userInfoResponse = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${googleAccessToken}`,
        },
      });
      const email = userInfoResponse.data.email;

      let existingUser = await User.findOne({ email });
      if (!existingUser) {
        // create a new user account
        const newUser = await User.create({
          verified: true,
          email,
          role: "default",
        });
        existingUser = newUser;
      }

      // create JWT token
      const token = jwt.sign(
        {
          email: existingUser.email,
          id: existingUser._id,
        },
        jwtSecret,
        { expiresIn: "1h" }
      );

      res.status(200).json({ result: existingUser, token });
    } catch (err) {
      res.status(400).json({ message: "Invalid access token!" });
    }
  } else {
    // regular sign-in flow
    if (email === "" || password === "")
      return res.status(400).json({ message: "Invalid field!" });
    try {
      const existingUser = await User.findOne({ email });

      if (!existingUser)
        return res.status(404).json({ message: "User doesn't exist!" });

      const isPasswordOk = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (!isPasswordOk)
        return res.status(400).json({ message: "Invalid credentials!" });

      const token = jwt.sign(
        {
          email: existingUser.email,
          id: existingUser._id,
        },
        jwtSecret,
        { expiresIn: "1h" }
      );

      res.status(200).json({ result: existingUser, token });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Something went wrong!" });
    }
  }
};
export const signupController = async (req: Request, res: Response) => {
  const { email, password, googleAccessToken } = req.body;
  if (googleAccessToken) {
    axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${googleAccessToken}`,
        },
      })
      .then(async (response) => {
        const email = response.data.email;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
          const token = jwt.sign(
            {
              email: existingUser.email,
              id: existingUser._id,
            },
            jwtSecret,
            { expiresIn: "1h" }
          );
          return res.status(400).json({
            message: "User already exists!",
            result: existingUser,
            token,
          });
        }

        const result = await User.create({
          verified: true,
          email,
          role: "default",
        });

        const token = jwt.sign(
          {
            email: result.email,
            id: result._id,
          },
          jwtSecret,
          { expiresIn: "1h" }
        );

        res.status(200).json({ result, token });
      })
      .catch((err) => {
        res.status(400).json({ message: "Invalid access token!" });
      });
  } else {
    if (email === "" || password === "") {
      return res.status(400).json({ message: "Invalid field!" });
    }
    try {
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        const isPasswordOk = await bcrypt.compare(
          password,
          existingUser.password
        );
        if (!isPasswordOk) {
          return res.status(400).json({ message: "Invalid credentials!" });
        }
        const token = jwt.sign(
          {
            email: existingUser.email,
            id: existingUser._id,
          },
          jwtSecret,
          { expiresIn: "1h" }
        );
        return res.status(200).json({
          result: existingUser,
          token,
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const result = await User.create({
        verified: true,
        email,
        password: hashedPassword,
        role: "default",
      });

      const token = jwt.sign(
        {
          email: result.email,
          id: result._id,
        },
        jwtSecret,
        { expiresIn: "1h" }
      );

      res.status(200).json({ result, token });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Something went wrong!" });
    }
  }
};