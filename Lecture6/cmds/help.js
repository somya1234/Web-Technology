module.exports = function(){
    console.log(` weather [command] <options>
    
    today .................. show weather for today
    forecast ............... show 5-day weather forecast
    version ................ show package version
    help ................... show help menu for a command
    `);
}

// if we have to run the function from help.js
//  then, 
// module.exports();