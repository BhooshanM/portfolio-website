const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT
});

const connectDB = () => {
  db.connect((err) => {
    if (err) {
      console.log("MySQL connection failed:", err);
    } else {
      console.log("MySQL Connected");
    }
  });
};

module.exports = db;
module.exports.connectDB = connectDB;