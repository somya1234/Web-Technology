const chalk = require("chalk");
const figlet = require("figlet");
const print = console.log;
const readline = require("readline");
const reader = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:"$$$"
});

var task=[];

console.clear();

print(chalk.blue(figlet.textSync("Tasker")));
print(chalk.cyan("Type a command (Type help to see the list of commands.)"));

reader.prompt();
reader.on("line", function(data){
    var dataArr = data.split(" ");
    if(dataArr[0]=="help"){
        print("Available commands:");
        print("1. add task_name");
        print("2. ls (to list all tasks)");
        print("3. delete id (enter task id to delete it)");
        print(`Available Commands
                1. skw`)
        reader.prompt();
    } else if(dataArr[0]=="add" && dataArr.length>0){
        var taskName = dataArr.shift();
        taskName = dataArr.join(" ");
        task.push(taskName);
        print("Task Added.");
        reader.prompt();
    } else if(dataArr[0]=="ls"){
        print(chalk.magenta("Tasks"));
        for(let i=0; i<task.length; i++){
            print(chalk.green(`${i+1} ${task[i]}`));
        }
        reader.prompt();
    } else if(dataArr[0]=="delete" && dataArr.length>0){


        var deleteTask = dataArr.slice(1).join(" ");
        // var deleteIndex = task.indexOf(deleteTask);
        // task.splice(deleteIndex,1);

        const id = deleteTask.split(" ")[0];
        print(id);
        task.splice(id-1,1);
        print("Task Deleted.");
        reader.prompt();
    } else {
        print("Wrong Command.");
        reader.prompt();
    }
});