const getRawWeather = require("../utilities/getRawWeather");

module.exports = async function(location){
    const fullWeather = await getRawWeather(location);
    console.log("Forecast for "+location+" : ");
    for(let i=0; i<fullWeather.length; i++){
        const cDate = fullWeather[i]["applicable_date"];
        const minTemp =  Math.ceil(fullWeather[i]["min_temp"]);
        const maxTemp = Math.ceil(fullWeather[i]["max_temp"]);
        const state = fullWeather[i]["weather_state_name"];
        console.log("            "+    cDate +" - Low: "+ minTemp + "° | High: "+ maxTemp + "° | "+ state);
    }
}
