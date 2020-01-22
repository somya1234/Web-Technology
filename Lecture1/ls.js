let fs = require('fs');

let filesInDir = fs.readdirSync(__dirname);
for(var i=0;i<filesInDir.length; i++){
    console.log(filesInDir[i]);
}