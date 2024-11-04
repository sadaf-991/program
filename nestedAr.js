function findLargestElement(nestedArray) { 
    let largest = nestedArray[0][0]; 
  //with for of loop
    for (let arr of nestedArray) { 
        for (let num of arr) { 
            if (num > largest) { 
                largest = num; 
            } 
        }
    }
    //with for loop
    for (let i = 0; i < nestedArray.length; i++) { 
        for (let j = 0; j < nestedArray[i].length; j++) { 
           
            if (nestedArray[i][j] > largest) { 
                largest = nestedArray[i][j]; 
            } 
        }
    }
    return largest;
}

const nestedArray = [[3, 5],[1, 4, 8],[7, 10, 6]];

console.log(findLargestElement(nestedArray));


