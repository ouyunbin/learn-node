'use strict';
var fs = require('fs');

fs.readFile('sample.docx',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        var text = data.toString('utf-8');
        console.log(text);
    }
})