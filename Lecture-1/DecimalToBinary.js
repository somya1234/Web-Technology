function dec2Bin(dec){
var pv = 1;
var bin=0;
while(dec!=0){
    var fv = dec%2;
    bin=fv*pv+bin;
    dec=Math.floor(dec/2);
    pv=pv*10;
}
return bin;
}
var newBin = dec2Bin(13);
console.log(newBin)