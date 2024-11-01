//find common in arrays with function
function c(arr1, arr2){
for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
    if(arr1[i]===arr2[j]){
        console.log(`${arr1[i]} is com`);
     }
   }
 }
}
let x = [1,2,3,6];
let y = [2,1,4,7];
console.log(c(x, y));

//find common in arrays without function
let a = [1,2,3,4,3];
let b = [2,3,4,7,6];

for(let i = 0; i < a.length; i++){
    for(let j = 0; j < b.length; j++){
    if(a[i]===b[j]){
        console.log(`${a[i]} is com`);
    }
    }
}