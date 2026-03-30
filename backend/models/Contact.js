const mongoose = require("mongoose");

<<<<<<< HEAD
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  projectType: String,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model("Contact", contactSchema);
=======
const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    projectType: String,
    message: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
>>>>>>> 8cc20ef702a935e8430d04de44698845c1db8efb
