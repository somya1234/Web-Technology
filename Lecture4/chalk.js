const chalk = require("chalk");
const print = console.log;
const figlet = require("figlet");

print(chalk.green("I am green"));
print(chalk.cyan("I am cyan."));
print(chalk.red(figlet.textSync("I am Large red.")));
print(figlet.textSync("Somya",{
    font:"Ghost"
}));
print(figlet.textSync("Singhal",{
    font:"Acrobatic"
}));
print(figlet.textSync("I am somya",{
    font:"Basic",
    horizontalLayout:"full"
}));
print(figlet.textSync("I am somya",{
    font:"Standard"
}));