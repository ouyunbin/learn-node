/**
 * 使用Node.js创建简单的HTTP服务器
 * **/ 
'use strict';
// 引入HTTP模块
var http = require('http');
// 解析url需要使用node中的url模块
var url = require('url');
// 处理本地文件需要使用path模块
var path = require('path');
// 解析当前目录
var workDir = path.resolve('.');
console.log(workDir)
// 组合完整的文件路径
var filePath = path.join(workDir,'pub','index.html');
// 创建HTTP Server，并传入回调函数
http.createServer((request,response) => {
    // 回调函数接收 request 和 response 对象，
    // 获得HTTP请求的 method 和 url；
    console.log(request.method + ': ' + request.url);
    // 将HTTP响应200写入response，同时配置Content-tyoe: text/html 
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Hello,world</h1>');
}).listen(3000)
console.log('Server running at localhost:3000')