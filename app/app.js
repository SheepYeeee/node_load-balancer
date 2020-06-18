const express = require('express');
const app = express();
const router = express.Router();
const db = require('./db');
const addshark = require('./routes/sharks');
const sharkList = require('./routes/sharksList');
const path = __dirname + '/views/';

// port號
const port = process.env.APPID;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/addshark', addshark);
app.use('/sharkList', sharkList);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
