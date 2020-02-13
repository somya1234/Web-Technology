const body = document.querySelector("body");
const pen = document.querySelector(".pen");
const pencil = document.querySelector("#pencil");

const ul = document.querySelector("ul");

//change elements
body.style.backgroundColor="black";
body.style.color = "white";
pen.textContent="It was sold out.";

// creating element
const img = document.createElement("img");

// setting attribute of image element just created above
img.setAttribute("src","somya2.jpeg");

// inserting image element created above before ul element
body.insertBefore(img,ul);
setInterval(function(){
    img.setAttribute("class","roundImg");
},1000);
setInterval(function(){
    img.removeAttribute("class","remo")
})

