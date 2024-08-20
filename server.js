const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000;

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'your-database'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to database.');
});

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
