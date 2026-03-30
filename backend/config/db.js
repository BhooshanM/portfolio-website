const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

<<<<<<< HEAD
module.exports = { connectDB };
=======
module.exports = connectDB;
>>>>>>> 8cc20ef702a935e8430d04de44698845c1db8efb
