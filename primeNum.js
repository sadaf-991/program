// prime no. with not prime

for(let i = 0; i <= 100; i++){
     if(i <= 1){
        console.log(`Not Prime: `, i);
     }else if(i === 2){
        console.log(`Prime: `, i);
    }else if(i % 2 === 0){
        console.log(`Not Prime: `, i);
    }else{
        console.log(`Prime: `, i);
    }
};

// only prime no. print
for(let i = 2; i <= 100; i++){
     if(i === 2 || i % 2 !== 0){
       console.log(`Prime: `, i);
   }
};

//prime no. with true false

function a(num){
for(let i = 0; i <= num; i++) {
    if (num % 2 === 0) return false;
    else return true;
}
}
console.log(a(4));