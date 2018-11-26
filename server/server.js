const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const db = require('./db/db')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get(`/classes`, (req, res) => {
  res.status(200).send({
    success: 'true',
    classes: db
  })
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
