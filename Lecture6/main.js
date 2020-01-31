const minimist = require("minimist");
// for making the commands like --l and --location
const help = require("./cmds/help");
const today = require("./cmds/today");
const forecast = require("./cmds/forecast");
const version = require("./cmds/version");
const input = process.argv.slice(2);
const parsedInput = minimist(input);
// console.log(parsedInput);
// now the command will be node main.js today --location Delhi
// or node main.js today -l Delhi
const location = parsedInput.l || parsedInput.location;
const cmd = parsedInput["_"];

if(cmd == "today"){
    today(location);
} else if(cmd == "forecast"){
    forecast(location);
} else if(cmd == "help"){
    help();
} else if(cmd == "version"){
    version();
} else {
    console.log("Wrong Command");
}