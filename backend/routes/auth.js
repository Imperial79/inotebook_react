const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator"); //used for validation of data
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "thisisasecretkey";
const router = express.Router();

// create a user using : POST "/api/auth/createUser": No Login Required

router.post(
  "/createUser",
  [
    body("name", "Enter a valid name(length >= 3)").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password(length >= 5)").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // If invalid input/error, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //check whether the user with this email already exist
      let user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (user) {
        return res
          .status(400)
          .json({ error: "sorry a user with this email already exists" });
      }

      //hashing the password with salt using bcryptJS to secure it
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      //create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);

      res.json({ authToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Some error occurred");
    }
  }
);

module.exports = router;
