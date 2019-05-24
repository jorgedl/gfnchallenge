/* eslint import/no-extraneous-dependencies: off */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { stores } = require('./data.json');

const app = express();

app.use(cors());
app.use(bodyParser());

// profile
app.get('/performance/api/stores/', (_, res) => {
    res.json(stores);
});

app.listen(8000, () => {
    console.log('Started mocked server');
});
