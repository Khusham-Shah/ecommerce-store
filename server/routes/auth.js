const express = require("express");
const router = express.Router();
const User = require("../models/user");

// LOGIN ROUTE
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // check empty
  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", token: "fake-jwt-token" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
