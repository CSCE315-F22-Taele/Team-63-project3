const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv').config();
const cors = require('cors');
// Create express app
const app = express();
const port = 5000;
// Create pool
const pool = new Pool({
    user: "csce331_905_john",
    host: 'csce-315-db.engr.tamu.edu',
    database: "csce331_905_63",
    password: "john",
    port: "5432",
    ssl: {rejectUnauthorized: false}
});

app.use(cors());
app.use(express.json());

//figure out a way
app.get('/user', async (req, res) => {
  teammembers = []
  const team = await pool.query('SELECT * FROM teammembers;');
  res.json(team.rows);
  res.end();

      
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
