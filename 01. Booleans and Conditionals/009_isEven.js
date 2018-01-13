/*Write a function called 'isEven'.

Given an integer, 'isEven' returns whether the integer is even or not.
*/

function isEven(num) {
  if(num%2===0)
    return true;
  else
    return false;
}
var output1 = isEven(42);
console.log(output1); // --> true

var output2 = isEven(19);
console.log(output2); // --> false
