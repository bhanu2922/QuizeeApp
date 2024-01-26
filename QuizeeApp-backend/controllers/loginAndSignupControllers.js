import User from "../db/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');


// login controllers ---------

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: " Invalid Credentials " });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: " Invalid Credentials" });
    }
    const token = jwt.sign({ userId: user._id }, config.jwtSecret, {
      expiresIn: "2h",
    });
    res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({ message: " Error ----" });
  }
};

// sign up controllers ---------

export const signUpController = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    const hashedpassword = await bcrypt.hash(password, 10);

    const newuser = new User({
      username,
      email,
      password: hashedpassword,
    });
    await newuser.save();
    return res.stauts(200).json({ message: " User register sucessfully " });
  } catch (error) {
    return res.status(401).json({ message: "Error----" });
  }
};
