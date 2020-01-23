function doubleIt(n){
    var new_no = n*2;
    return new_no;
}
function transformer(arr, doubleIt){
    var newarr=[];
    for (var i=0; i<arr.length; i++){
        newarr.push(doubleIt(arr[i]));
    }
    return newarr;
}
arr = [1,2,3,4,5,6];
console.log(transformer(arr,doubleIt));