const express = require("express");
const cors = require("cors");
require("dotenv").config();

<<<<<<< HEAD
const { connectDB } = require("./config/db");
=======
const connectDB = require("./config/db");
>>>>>>> 8cc20ef702a935e8430d04de44698845c1db8efb
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// middleware
<<<<<<< HEAD
app.use(cors({
  origin: "https://bhooshan-portfolio.netlify.app"
}));
app.use(express.json());

// ✅ ROOT ROUTE (Render health check)
app.get("/", (req, res) => {
  res.status(200).send("Backend running successfully");
});
=======
app.use(cors());
app.use(express.json());

// database connection
connectDB();
>>>>>>> 8cc20ef702a935e8430d04de44698845c1db8efb

// routes
app.use("/api/contact", contactRoutes);

<<<<<<< HEAD
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

=======
app.get("/", (req, res) => {
  res.send("Backend running successfully");
});

const PORT = process.env.PORT || 5000;
>>>>>>> 8cc20ef702a935e8430d04de44698845c1db8efb
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
