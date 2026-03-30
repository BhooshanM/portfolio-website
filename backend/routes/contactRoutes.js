const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
<<<<<<< HEAD
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
    console.error(error);
=======
    await Contact.create(req.body);
    res.status(201).json({ message: "Message stored successfully" });
  } catch (error) {
>>>>>>> 8cc20ef702a935e8430d04de44698845c1db8efb
    res.status(500).json({ error: "Server error" });
  }
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 8cc20ef702a935e8430d04de44698845c1db8efb
