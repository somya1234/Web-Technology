const events = require("events");
const eventEmitter = new events();

// server side
eventEmitter.on("login", function(email,password){
    if(email.contains("@")){
        console.log("input field is valid.");
    } else {
        console.log("input email is not valid.");
    }
});

eventEmitter.on("login", function(){
    if(email=="abc@gmail.com" && password== 12345678){
        console.log("user verified");
    } else {
        console.log("invalid user");
    }
})

// client side- this is not necessary to write as the data comes itself.
// not necessary to emit always unless in react
// eventEmitter.emit("login","abc@gmail.com",12345678);
