// question 1
function b(){
    var myvar;
    console.log("Line Number 3 "+ myvar);
}
function a(){
    var myvar=2;
    console.log("Line Number 7"+myvar);
    b();
}
console.log("Line Number 10 "+myvar);
var myvar=1;
a();
console.log("Line Number 13"+ myvar);

// question 2
function b(){;
    console.log("Line Number 3 "+ myvar);
}
function a(){
    var myvar=2;
    console.log("Line Number 7"+myvar);
    b();
}
console.log("Line Number 10 "+myvar);
var myvar=1;
a();
console.log("Line Number 13"+ myvar);
// answer 2-
// it takes from its immediate parent. i.e from fn a()

//question 3
// global variable
function b(){;
    console.log("Line Number 3 "+ myvar);
}
function a(){
    myvar=2;
    console.log("Line Number 7"+myvar);
    b();
}
console.log("Line Number 10 "+myvar);
myvar=1;
a();
console.log("Line Number 13"+ myvar);