const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Test GET route
router.get("/", (req, res) => {
  res.send("Contact API working");
});

// POST contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, projectType, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      projectType,
      message
    });

    await newContact.save();

    res.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;