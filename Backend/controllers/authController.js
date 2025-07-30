// controllers/authController.js

import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Signup controller
export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const newUser = new User({
    username,
    email,
    password: hashedPassword
  });

  await newUser.save();

  // Create token
  const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
    expiresIn: "1d"
  });

  // Send response
  res.status(201).json({
    message: "Signup successful",
    token,
    user: {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email
    }
  });
};

// Login controller
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid password" });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d"
  });

  res.status(200).json({
    message: "Login successful",
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email
    }
  });
};
