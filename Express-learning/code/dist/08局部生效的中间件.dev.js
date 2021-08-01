"use strict";

//导入express模块
var express = require('express'); //创建服务器实例


var app = express(); // 定义中间件函数

var mw1 = function mw1(req, res, next) {
  console.log('调用了局部中间件函数');
  next();
}; // 创建路由


app.get('/user', mw1, function (req, res) {
  res.send('Home page');
}); //调用 app.listen()方法 启动服务器并 添加端口号

app.listen(81, function () {
  console.log('Express server is runing at http://127.0.0.1:81');
});