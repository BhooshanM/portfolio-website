const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, projectType, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      projectType,
      message,
    });

    await newContact.save();
    res.json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET all messages (for admin later)
router.get("/", async (req, res) => {
  const messages = await Contact.find().sort({ createdAt: -1 });
  res.json(messages);
});

module.exports = router;