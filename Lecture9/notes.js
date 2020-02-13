const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

var initialTasks = localStorage.getItem("tasks")
initialTasks = JSON.parse()

button.addEventListener("click", function(){
    if(input.value==""){
        alert("Beta kuch to likh.");
        return;
    }
    const val = input.value;
    const li = document.createElement("li");
    li.innerHTML=`<p> ${val}</p>
    <img src="somya2.jpeg" alt="">`
    ul.appendChild(li);
    addElementToLS(val);
    input.value="";


    const img = li.querySelector("img");
    img.addEventListener("click",function(){
        img.parentElement.remove();
        console.log("success");
    });

    function addElementToLS(val){
        if(localStorage.getItem("tasks")==null){
            var Tasks = [val];
            localStorage.setItem("tasks",JSON.stringify(Tasks));
        } else {
            var Tasks = localStorage.getItem("tasks");
            Tasks = JSON.parse(Tasks);
            Tasks.push(val);
            localStorage.setItem("tasks",JSON.stringify(Tasks));
        }
    }
});


// or you can use this method in addEventListener to img.
// function removeElement(e){
//     console.log(e);
//     //element on which event has occurred
//     e.currentTarget.parentElement.remove();
// }
