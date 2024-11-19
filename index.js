

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello everybody')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//
const sqlite3 = require('sqlite3').verbose();

// Open the SQLite database
const db = new sqlite3.Database('./mydatabase.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});
