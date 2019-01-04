'use strict';
var fs = require('fs');

var rs = fs.createReadStream('sample.docx');
var writeData = null
rs.on('data',(chunk)=>{
    console.log('Data:');
    writeData = chunk
    console.log(chunk)
});

rs.on('end',()=>{
    console.log('end')
});

rs.on('error',(err)=>{
    console.log('Error: ' + err );
})

var ws1 = fs.createWriteStream('newFile.docx');
ws1.write(writeData)
ws1.write('end');
ws1.end()