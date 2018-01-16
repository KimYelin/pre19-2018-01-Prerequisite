/*Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1*/

function factorial(n) {
  var i = 1;
  var result = 1;
  while(i <= n){
    result = result * i;
    i++;
  }
  return result;
}

console.log(factorial(3)); // => 6
console.log(factorial(4)); // => 24
console.log(factorial(5)); // => 120
