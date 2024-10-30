//sorting or ascending order
let arr = [2,3,1,5];

for (let i = 0; i < arr.length; i++) {
  for (let j = i+1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
       let temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
       
    }
  }
}
console.log("Sorted Array:", arr);

//descending order
for (let i = 0; i < arr.length; i++) {
  for (let j = i+1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
       let temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
       
    }
  }
}
console.log("Descending Order:", arr);