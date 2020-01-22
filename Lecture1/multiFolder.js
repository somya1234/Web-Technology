var fs = require('fs');
//mkdir folder
for(var i=1;i<=50;i++){
    fs.mkdirSync("Lecture "+i);
}
//Take Single Input
var folderName = process.argv[2];
console.log(folderName);
//Take Multiple Input
// var input = process.argv[2].slice.join(" ");
// console.log(input);

//Undefined Folder Name
for(var i=1;i<=50;i++){
    if(folderName+i == undefined){
        console.log("Please enter folderName");
        return;
}
//Duplicate Folders

if(fs.existsSync(folderName+i) ==true){
    console.log(folderName+"already exists.");
    continue;
}
fs.mkdirSync(folderName +i);
console.log('Folder has been created '+ folderName+i)
}

//Remove Folders
for(var i=1;i<=50;i++){
    if(folderName+i == undefined){
        console.log("Please enter folderName");
        return;
    }
    //Duplicate Folders
    if(fs.existsSync(folderName+i) ==false){
        console.log(folderName+"does not exists.");
        continue;
    }
    fs.rmdirSync(folderName+i);
    console.log('Folder has been deleted '+ folderName+i)
}

//