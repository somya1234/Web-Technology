const axios = require("axios");

module.exports = async function(){
    const response = await axios.get(
    "http://ip-api.com/json");
    // console.log(response);
    location = response.data.city;
    // console.log(location);
    return location;
}

// to run this in this module
// module.exports();