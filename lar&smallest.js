//find max
let a = [2,3,4,65,9];
let e = a[0];

for(let i = 1; i < a.length; i++){
    if(a[i] > e){
        e = a[i];
    }
}
console.log(e);

///with method
//Math.max() – Returns the largest number in a list of numbers.
function max(arr){
    return Math.max(...arr);
}
console.log(max([1,9,8,7,3]));

//find both in one
let b = [2,1,3,4,19,7,8];
let c = b[0];
let d = b[0];

for(let i = 0; i < b.length; i++){
    if(b[i] > c){
        c = b[i];
    }else if(b[i] < d){
        d = b[i];
    }
}
console.log(c);
console.log(d);

//with method
function LarSm(arr){
    let lar = Math.min(...arr);
    let sm = Math.max(...arr);

    return [lar, sm];
}
console.log(LarSm([1,2,10,4,8,2]));
