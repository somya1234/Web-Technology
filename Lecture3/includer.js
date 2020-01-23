function isOdd(n){
    if(n%2!=0){
        return n;
    }
}
const arr = [5,8,14,17,23,6,8]

// METHOD-1 --> TRANSFORMER FUNCTION
// function includer(arr, cb){
//     const newarr = []
//     for(var i=0; i<arr.length; i++){
//         if(isOdd(arr[i])!='No'){
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }
newArr = arr.map(isOdd);
console.log(newArr);

// METHOD-2 FILTER METHOD
console.log(newArr.filter(isOdd));

// console.log(includer(arr,isOdd));

// function can also be made like
// In includer result should be true or false.
function isOdd(x){
    return x%2==1;
}