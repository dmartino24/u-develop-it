const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  // Your MySQL username,
  user: "root",
  // Your MySQL password
  password: "nh35?aQ1De-3",
  database: "election",
});

module.exports = db;
