const getRawWeather = require("../utilities/getRawLocation");
module.exports = async function(location){
    const fullWeather = await getRawWeather(location);
    // 5 days weather
    const TodaysWeather = fullWeather[0];
    const currentState = TodaysWeather["weather_state_name"];
    const temp = Math.ceil(TodaysWeather["the_temp"]);

    console.log(`Current Conditions in ${location} are      
                                    ${currentState}  ${temp}`);
};
