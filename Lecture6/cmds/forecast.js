const getRawWeather = require("../utilities/getRawWeather");
const getLocation = require("../utilities/getLocation");
const ora = require("ora");

module.exports = async function(location){
    const spinner = ora('Loading unicorns');
    setTimeout(()=>{
        spinner.text="Loading.....",
        spinner.color="blue"
    })
    spinner.start();
    if(location==undefined){
        location = await getLocation();
    }
    const fullWeather = await getRawWeather(location);
    spinner.stop();
    console.log("Forecast for "+location+" : ");
    for(let i=0; i<fullWeather.length; i++){
        const cDate = fullWeather[i]["applicable_date"];
        const minTemp =  Math.ceil(fullWeather[i]["min_temp"]);
        const maxTemp = Math.ceil(fullWeather[i]["max_temp"]);
        const state = fullWeather[i]["weather_state_name"];
        console.log("            "+    cDate +" - Low: "+ minTemp + "° | High: "+ maxTemp + "° | "+ state);
    }
}
