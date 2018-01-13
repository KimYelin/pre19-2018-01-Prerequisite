/*Write a function called 'getMin'.

Given two numbers, 'getMin' returns the lesser of these two numbers.

Notes:
* If the two numbers are equal, return either one.
*/

function getMin(num1, num2) {
  if (num1<= num2)
    return num1;
  else
    return num2;
}

var output1 = getMin(19, 34);
console.log(output1); // --> 19;

var output2 = getMin(2.3, -19);
console.log(output2); // --> -19;
