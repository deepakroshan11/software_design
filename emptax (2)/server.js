const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.post('/api/superadmin', (req, res) => {
  const { companyName, cin, gstin, pan, companyAddress, officialPhoneNumber, officialEmail } = req.body;
  const query = 'INSERT INTO superadmin (companyName, cin, gstin, pan, companyAddress, officialPhoneNumber, officialEmail) VALUES (?, ?, ?, ?, ?, ?, ?)';

  db.query(query, [companyName, cin, gstin, pan, companyAddress, officialPhoneNumber, officialEmail], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
      return;
    }
    res.send('Data inserted successfully');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
