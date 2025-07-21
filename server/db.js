const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306  // Use 3307 from .env
});

db.connect(err => {
  if (err) {
    console.log('❌ DB connection failed:', err);
  } else {
    console.log('✅ MySQL Connected...');
  }
});

module.exports = db;
