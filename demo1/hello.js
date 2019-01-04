// 'use strict';

// var name = 'Node.js';
// var s = `Hello,${name}`;
// console.log(s);

// 将程序改造成为模块形式
'use strict';
var s = 'Hello';

function greet(name){
    console.log(s + ', '+ name + '!');
}
/**
 * 1、将greet方法暴露出去，以便其他地方使用这个方法；
 * 2、在其他文件中想要使用模块，请用 var variable = require('hello.js(文件相对路径)')
 * */ 
module.exports = greet;