//factorial calculation using recursion.
//what is recursion => Recursion is a programming 
//concept where a function calls itself to solve a problem.
//The function keeps calling itself with modified arguments
//until it reaches a stopping condition, known as the base case,
//where the function stops calling itself and begins returning
//results up the chain of calls.
// Base case: n <= 1 ? 1
// Recursive case: n * factorial(n - 1)

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); 
