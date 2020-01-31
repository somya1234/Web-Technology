const axios = require("axios");

module.exports = async function getWeather(cityName){

    const response = await axios.get(
        "https://www.metaweather.com/api/location/search/?query="+cityName
    );
    console.log(response.data);
    woeid = response.data[0].woeid;

    const anotherResponse = await axios.get(
        "https://www.metaweather.com/api/location/"+woeid+"/"
    );
    const ManyDaysWeather = anotherResponse.data["consolidated_weather"];
    return ManyDaysWeather;
};

// for running it from this page.
// getWeather(process.argv[2]);