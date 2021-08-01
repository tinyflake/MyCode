"use strict";

var express = require('express');

var app = express();

var router = require('./router');

app.listen(81, function () {
  console.log('this express server is running at http://127.0.0.1:81');
});
app.use('/api', router);