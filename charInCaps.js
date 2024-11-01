//each letters in caps
let str = "i am sadaf";
str = str.split(" ");
let res = '';

for(let i = 0; i < str.length; i++){
   let s = str[i].toUpperCase();
    res = res + s + " ";
}
console.log(res);

//each first letters in caps
let s = "i am sadaf";
s = s.split(" ");
let r = '';

for(let i = 0; i < s.length; i++){
   let d = s[i][0].toUpperCase() + s[i].slice(1);
    r = r + d + " ";
}
console.log(r);

let st = "he is happy";
let result = "";

for (let i = 0; i < st.length; i++) {
  // Check if the current character is the second letter in a word
  result += (i > 1 && st[i - 2] === " ") || (i === 1) ? st[i].toUpperCase() : st[i];
}

console.log(result);

