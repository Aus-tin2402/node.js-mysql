const mysql = require("mysql");

const connect = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER|| "root",
  password: process.env.DB_PASS|| "root",
  database: process.env.DB_NAME||"user_db",
});

connect.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1);
  } else {
    console.log("✅ Database Connected Successfully");
  }
});

module.exports = connect;
