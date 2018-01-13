/*Write a function called 'isOdd'.

Given an integer, 'isOdd' returns whether the integer is odd or not.*/

function isOdd(num) {
	if(num%2 === 1)
    return true;
  else
    return false;
}
var output1 = isOdd(42);
console.log(output1); // --> false

var output2 = isOdd(19);
console.log(output2); // --> true
