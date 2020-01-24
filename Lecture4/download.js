// See the ouput.
// downloaded is a callback function

const service = require("./services");

console.log("Request has been sent");
service.downloadFile("g-drive/img.jpeg",downloaded);
function downloaded(imgPath){
    console.log("Img Downloaded To "+ imgPath);
}
console.log("Waiting for response");