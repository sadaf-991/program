let s = 'hello123';
let str = "";
let num = '';

for(let  i = 0; i < s.length; i++){
    if(s[i] >= '0' && s[i] <= '9'){
        num += s[i];
    }else if (s[i] >= 'a' && s[i] <= 'z'){
        str += s[i];
    }
}
console.log(`Letters: `,str);
console.log(`Numbers:`, num);