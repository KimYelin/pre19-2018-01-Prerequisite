/*Write a function called 'generateRandomInteger'.

Given an integer, 'generateRandomInteger' returns a random integer between 0 and n.

Notes
* The MDN references on Math.random, Math.floor, and Math.ceil may be very helpful in solving this problem.
* If you are given a negative number, your funciton should return false.
* If you are given 0, your function should return 0.
*/

function generateRandomInteger(num) {
	min = Math.ceil(0);
  max = Math.floor(num);
  var randomNum = Math.floor(Math.random() * (max - min)) + min;
  //The maximum is exclusive and the minimum is inclusive
	if(randomNum >= 0)
	  return randomNum;
	else
	  return false;
}

var output1 = generateRandomInteger(42);
console.log(output1); // --> could be one of 37, 21, 3, etc.

var output2 = generateRandomInteger(-19);
console.log(output2); // --> false

var output3 = generateRandomInteger(0);
console.log(output3); // --> 0
