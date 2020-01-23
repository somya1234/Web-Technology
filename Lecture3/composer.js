function composer(cb, arr){
    var prod =arr[0];
    // var prod=1;
    for(let i=0; i<arr.length; i++){
        var prod=cb(arr[i],prod);
    }
    return prod;
}
function multiplier(a,b){
    return a*b;
}
function adder(a,b){
    return a+b;
}
const arr = [1,2,3,4,5];
var fans = composer(multiplier,arr);
var fans = composer(adder,arr);
console.log(fans);

// METHOD-2 :- REDUCE
console.log(arr.reduce(multiplier));