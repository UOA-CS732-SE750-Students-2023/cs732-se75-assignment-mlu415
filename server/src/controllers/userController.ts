import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import axios from "axios";
import { config as dotenvConfig } from "dotenv";
import { Request, Response } from "express";
import User from "../models/User";

dotenvConfig();
const jwtSecret = process.env.JWT_SECRET;



export const signinController = async (req: Request, res: Response) => {
  if (req.body.googleAccessToken) {
    const { googleAccessToken } = req.body;

    axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${googleAccessToken}`,
        },
      })
      .then(async (response) => {
        const email = response.data.email;

        const existingUser = await User.findOne({ email });

        if (!existingUser)
          return res.status(404).json({ message: "User doesn't exist!" });

          const token = jwt.sign(
            {
              email: existingUser.email,
              id: existingUser._id,
            },
            jwtSecret,
            { expiresIn: "1h" }
          );

        res.status(200).json({ result: existingUser, token });
      })
      .catch((err) => {
        res.status(400).json({ message: "Invalid access token!" });
      });
  } else {
    const { email, password } = req.body;
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
      res.status(500).json({ message: "Something went wrong!" });
    }
  }
};

export const signupController = async (req: Request, res: Response) => {
  if (req.body.googleAccessToken) {
    const { googleAccessToken } = req.body;
    axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${googleAccessToken}`,
        },
      })
      .then(async (response) => {
        const email = response.data.email;

        const existingUser = await User.findOne({ email });

        if (existingUser)
          return res.status(400).json({ message: "User already exists!" });

        const result = await User.create({
          verified: true,
          email,
          role: "default",
        });

        const token = jwt.sign(
            {
              email: existingUser.email,
              id: existingUser._id,
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
        const {email, password} = req.body;
        if(email === "" || password === ""){
            return res.status(400).json({message: "Invalid field!"});
        }
        try {
            const existingUser = await User.findOne({email})

            if(existingUser){
                return res.status(400).json({message: "User already exist!"})
            }
            const hashedPassword = await bcrypt.hash(password,12)

            const result = await User.create({email, password:hashedPassword, role: "default"})
            
            const token = jwt.sign(
                {
                  email: existingUser.email,
                  id: existingUser._id,
                },
                jwtSecret,
                { expiresIn: "1h" }
              );

            res
                .status(200)
                .json({result, token})
        } catch (err) {
            res
                .status(500)
                .json({message: "Something went wrong!"})
        }
        
    }

}