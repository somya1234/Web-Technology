const getRawWeather = require("../utilities/getRawWeather");
const getLocation = require("../utilities/getLocation");
const ora = require("ora");

module.exports = async function(location){
    const spinner = ora({
        frames : ["-","+", ":0"]
    });
    spinner.start();
    if(location==undefined){
            location = await getLocation();
            // console.log(location);
    }
    const fullWeather = await getRawWeather(location);
    // 5 days weather
    const TodaysWeather = fullWeather[0];
    const currentState = TodaysWeather["weather_state_name"];
    const temp = Math.ceil(TodaysWeather["the_temp"]);
    spinner.stop();
    console.log(`Current Conditions in ${location} are      
                                    ${currentState}  ${temp}`);
};

