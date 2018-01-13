/*Write a function called 'isNegative'.

Given an integer, 'isNegative' returns whether the integer is negative or not.*/

function isNegative(num) {
  if(num< 0)
    return true;
  else
    return false;
}
var output1 = isNegative(-42);
console.log(output1); // --> true

var output2 = isNegative(19);
console.log(output2); // --> false

var output3 = isNegative(0);
console.log(output3); // --> true
