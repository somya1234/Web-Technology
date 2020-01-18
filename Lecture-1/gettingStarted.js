//Non-primitive Data Types
//2. Arrays
var arr=[1,1.1,true,null, undefined, [1,2,3,4,5], function fn(){
    return "value returned";
}]
console.log(arr[6]);
console.log(arr[6]());
console.log(arr[5][2]);

for(var key in arr){
    console.log(key+":"+arr.key);
}
arr[1075]="jkws"
console.log()
arr["some value"]="Wdlwwj"
