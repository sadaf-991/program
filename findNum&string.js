// find number and string seperatly in a string 

let a = "hello123";
let number = ""; letters = "";

//seperating letters
let b = a.split("").filter(char =>  isNaN(char) && char !== "");
let c = b.join("");
console.log(c); 
//seoerating numbers
let d = a.split("").filter(char =>  !isNaN(char) && char !== "");
// converting stringNum into Number
let num = d.map(Number);
console.log(num); 

//without using any method
for(let i = 0; i < a.length; i++){
    if(a[i] >= "0" && a[i] <= "9"){
       number += a[i];
     }else{
        letters += a[i];
     }
}
console.log("Num:", number);
console.log("Letter:", letters);


