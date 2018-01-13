/*Write a function called 'getMax'.

Given two numbers, 'getMax' returns the larger of these two numbers.

Notes:
* If the two numbers are equal, return either one.*/

function getMax(num1, num2) {
  if(num1 > num2)
    return num1;
  else if (num1===num2)
    return num1;
  else
    return num2;
}
var output1 = getMax(19, 34);
console.log(output1); // --> 34

var output2 = getMax(2.3, -19);
console.log(output2); // --> 2.3

var output2 = getMax(2, 2);
console.log(output2); // --> 2
