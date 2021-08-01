"use strict";

var express = require('express');

var app = express();
app.use(function (req, res, next) {
  // 请求到达服务器的时间
  var time = Date.now(); // 为req对象挂载自定义属性，从而把时间共享给所有路由

  res.startTime = time;
  next();
});
app.get('/', function (req, res) {
  res.send('get 成功，访问时间：' + res.startTime);
});
app.post('/user', function (req, res) {
  res.send('post 成功，访问时间：' + res.startTime);
});
app.listen(81, function () {
  console.log('ok');
});