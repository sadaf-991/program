//find vowels
let a = "sadafansari";
let vowels = 'aeiouAEIOU';
let count = 0;

for(let i = 0; i < a.length; i++){
    for(let j = 0; j < vowels.length; j++){
        if(a[i]===vowels[j]){
           count++;
        }
    }
}
// console.log(`${count}: Vowels`);

//find consonants
let b = "sadaf ansari";
let conso = 'bcdfghjklmnpqrstvwxyz';
let inc = "";
let co = 0;

for(let i = 0; i < b.length; i++){
    for(let j = 0; j < conso.length; j++){
        if(b[i]===conso[j]){
          inc += b[i];
          co++;
        } 
    }
}
// console.log(`${inc}: ${co} - Cons`);


//finding vowels and consonants in one program
let str = "sadaf ansari";
let Vowels = 0, consonants = 0;

for(let i = 0; i < str.length; i++){
   
    if((str[i] >= 'a' && str[i] <= 'z')){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'o' || str[i] === 'i' || str[i] === 'u'){
           Vowels++;
        }else{
            consonants++;
        }
    }
}
console.log(`Vowels: ${Vowels} Conso: ${consonants}`);