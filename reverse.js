//reverse string
let s = 'sadaf';
let rev = '';

for(let i = s.length-1; i >= 0; i--){
     rev += s[i];
}
console.log(rev);

//reverse num
let n = 123;
n = n + '';
let r = '';

for(let i = n.length-1; i >= 0; i--){
     r += n[i];
}
console.log(r);

//reverse array
let a = ['sadaf', 'ansari'];
let ra = [];

for(let i = a.length-1; i >= 0; i--){
    ra.push(a[i]);
}
console.log(ra);

//with function
function revStr(str){
    let res = '';
    for(let i = str.length-1; i >= 0; i--){
        res += str[i];
    }
    return res;
}
console.log(revStr('hello'));