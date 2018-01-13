/*Write a function called 'isPositive'.

Given an integer, 'isPositive' returns whether the integer is positive or not.*/

function isPositive(num) {
  if(num>= 0)
    return true;
  else
    return false;
}
var output1 = isPositive(42);
console.log(output1); // --> true

var output2 = isPositive(-19);
console.log(output2); // --> false
