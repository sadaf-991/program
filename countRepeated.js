//count repeating numbers 
let a = 122337668;
 a += "";
let count = {};

for(let i = 0; i < a.length; i++){
    // + will convert back the string num into number
    let num = +a[i];
    count[num] = count[num] ? count[num] + 1 : 1;
}
console.log(count);

//count repeating letters in a string
let str = "sadaf";
let c = {};

for(let i = 0; i < str.length; i++){
    let char = str[i];
    c[char] = c[char] ? c[char] + 1 : 1;
    
}
// console.log(c);

//without using ternary operator
let s = "sadaf";
let d = {};

for(let i = 0; i < s.length; i++){
   let letters = s[i];
   if(d[letters]){
    d[letters] += 1;
   }else{
    d[letters] = 1;
   }
}
// console.log(d);

//using [] 
let le = "sadaf";
let ar = [];

for(let i = 0; i < le.length; i++){
   let letters = le[i];
   if(ar[letters]){
    ar[letters] = ar[letters] +1;
   }else{
    ar[letters] = 1;
   }
   ar.push(letters);
}
console.log(ar);

