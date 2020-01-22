var x = 10;
function a(){
    var x=20;
    x++;
    console.log("Line Number 5 "+x);
    if(true){
        var x=30;
        x++;
        console.log("Line Number 11 "+x);
    }
    console.log("line Number 11 "+x);
}
console.log("Line Number 14 "+x);
a();
console.log("Line number 16 "+x);