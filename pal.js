// //without true false
// function isPal(a){
// for(let i = a.length-1; i >= 0; i--){
    
//     for(let j = 0; j < a.length; j++){
//         if(a[i]===a[j]){
//            console.log(`Palindrome: ${a}`);
//         }else{
//         console.log(`Not Palindrome: ${a}`);
//         }
//         return a; 
//      } 
//   }
// }
// isPal("nitin");


// //with true false
// function isPal(b){
// for(let i = b.length-1; i >= 0; i--){
    
//     for(let j = 0; j < b.length; j++){
//         if(b[i]===b[j]){
//         return true;
//         }
//         return false; 
//     }  
   
//   }
// }
// console.log(isPal("nitin"));

//with method

function isP(str){
    return str === str.split("").reverse().join("");
}
console.log(isP("racecar"));

//number palindrom

function numPal(num){
    num = num + "";
    for(let i = num.length-1; i >= 0; i--){
        return num===num[i];
   
    }
    
    }

console.log(numPal(121));