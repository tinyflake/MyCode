"use strict";

var express = require('express');

var app = express(); // 第一个全局中间件

app.use(function (req, res, next) {
  console.log('启动了第一个中间件');
  next();
}); // 第二个全局中间件

app.use(function (req, res) {
  console.log('启动了第二个中间件');
});
app.get('/', function (req, res) {
  res.send('get page');
});
app.listen(81, function () {});