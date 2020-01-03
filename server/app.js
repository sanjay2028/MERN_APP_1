const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.portNumber || 5000;
const generatefiles = require('./routes/generatefile');

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended: false,}));
app.use(bodyParser.json());
app.use('/api/file', generatefiles);

app.listen(PORT, () => console.log(`Listening at Port No. ${PORT}`));