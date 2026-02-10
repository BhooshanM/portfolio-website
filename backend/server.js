const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ✅ test route (NO DB required)
app.get("/", (req, res) => {
  res.send("Backend running successfully");
});

// routes
app.use("/api/contact", contactRoutes);

// PORT (Render compatible)
const PORT = process.env.PORT || 10000;

// ✅ start server FIRST
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // ✅ connect DB AFTER server starts
  connectDB()
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection failed:", err.message));
});

