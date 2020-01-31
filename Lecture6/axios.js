// axios ==> promise based library to make http request

const axios = require("axios");

async function getWeather(city){
    console.log("before")
    // make a http get request to the server
    const response = await axios.get(
        // "http://jsonplaceholder.typicode.com/users"

        // "https://www.metaweather.com/api/location/search/?query="+city
        // or use `$(city)`method.
        `https://www.metaweather.com/api/location/search/?query=${city}`
    );
    // your requested information will be inside data key.
    console.log(response.data);
    console.log("after");
    woeid = response.data[0]["woeid"];
    // console.log(woeid);
    const anotherResponse = await axios.get(
        "https://www.metaweather.com/api/location/" + woeid +"/"
    );
    // console.log(anotherResponse.data)

    // Filter Required Data
    const TodaysWeather = anotherResponse.data["consolidated_weather"][0];
    const currentState = TodaysWeather["weather_state_name"];
    const temp = Math.ceil(TodaysWeather["the_temp"]);

    // console.log(TodaysWeather);
    console.log(`answer is     
                           ${currentState}  ${temp}`);
}
// getWeather();

// for taking input of city as a 3rd word.
// for the input of command node weather.js today Mumbai

getWeather(process.argv[3]);