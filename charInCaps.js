// //each letters in caps
// let str = "i am sadaf";
// str = str.split(" ");
// let res = '';

// for(let i = 0; i < str.length; i++){
//    let s = str[i].toUpperCase();
//     res = res + s + " ";
// }
// console.log(res);

// //each first letters in caps
// let s = "i am sadaf";
// s = s.split(" ");
// let r = '';

// for(let i = 0; i < s.length; i++){
//    let d = s[i][0].toUpperCase() + s[i].slice(1);
//     r = r + d + " ";
// }
// console.log(r);

let str = "she is happy";
let result = "";

for (let i = 0; i < str.length; i++) {
  // Check if the current character is the second letter in a word
  result += (i > 1 && str[i - 2] === " ") || (i === 1) ? str[i].toUpperCase() : str[i];
}

console.log(result); // Output: "sHe iS hAppy"

