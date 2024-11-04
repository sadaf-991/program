// function even(arr){
//   return arr.filter((ar) => (
//      ar % 2 === 0)) 
// }
// console.log(even([2,3,4,5,6]));

let a = [2,3,4,5,6];
let res = [];

for(let i = 0; i < a.length; i++){
    if(a[i] % 2 === 0){
      res.push(a[i]);
    }
}
console.log(res);
