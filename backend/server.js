const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ✅ ROOT ROUTE (Render health check)
app.get("/", (req, res) => {
  res.status(200).send("Backend running successfully");
});

// routes
app.use("/api/contact", contactRoutes);

// database connection (safe)
(async () => {
  try {
    await connectDB();
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
  }
})();

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
