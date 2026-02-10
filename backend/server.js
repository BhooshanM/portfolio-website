const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

/**
 * ✅ ROOT TEST ROUTE
 * This must be BEFORE DB connection
 */
app.get("/", (req, res) => {
  res.send("Backend running successfully");
});

// middleware
app.use(cors());
app.use(express.json());

// database
const connectDB = require("./config/db");
connectDB();

// routes
const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contact", contactRoutes);

// port (Render injects PORT automatically)
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
