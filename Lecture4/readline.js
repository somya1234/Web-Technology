const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "$$"
});
console.clear();

reader.prompt();

reader.on("line", function(data){
    console.log("Did you just said "+data);
    reader.prompt();
})

reader.on("close", function(){
    console.log("Thank you for using the cli.");
})