//Empty Array
// Question 1
//To find the reverse of an array
var first = [1,2,3,4,5]
var narr=first.reverse()
console.log(narr);

//Or by storing the length and using the push, pop method.
rev=[]
length= first.length;
for(i=0;i<length;i++){
    rev.push(first.pop());
}
console.log(rev);

//Question 2
//To find the union of unique elements of the two arrays within.
var one=[1,2,3,1]
var two =[100,2]
var three= one.concat(two);
length=three.length;
var four = []
for(var i=0;i<length;i++){
    if(!four.includes(three[i])){
        four.push(three[i]);
    }
}
console.log(three);

//Question 3 - To find union of two arrays
//We can either use indexOf method or includes method.
var arr1=[1,2,3];
var arr2=[100,2,1,10];
var length=arr2.length;
for(var i=0;i<length;i++){
    if(arr1.includes(arr2[i])==false){
        arr1.push(arr2[i]);
    }
}
console.log(arr1);