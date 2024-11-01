//remove duplicate elements from an array
let a = [1,2,3,4,4,6,7,6,8,8];
let b = [];

for(let i = 0; i < a.length; i++){
    let isDup = false;
    for(let j = 0; j < b.length; j++){
        if(a[i]===b[j]){
           isDup = true;
           break;
        }
    }
    if(!isDup){
        b.push(a[i]);
    }
}
// console.log(b);

//remove duplicate character from a string
let str = "aabbccddee";
let r = [];

for(let i = 0; i < str.length; i++){
    let isDup = false;

    for(let j = 0; j < r.length; j++){
        if(str[i]===r[j]){
            isDup = true;
        }
    }
    if(!isDup){
        r += str[i];
    }
}
// console.log(res);

//remove duplicate from number
let num = 122334445566777;
num = num + "";
let res = 0;

for(let i = 0; i < num.length; i++){
    let isDup = false;

    for(let j = 0; j < res.length; j++){
        if(num[i]===res[j]){
            isDup = true;
        }
    }
  if(!isDup){
    res += num[i];
    } 
}
console.log(res);