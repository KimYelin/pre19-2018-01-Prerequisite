/*
Write a function called 'getSmallerString'.

Given two strings, 'getSmallerString' return the shorter string.

Notes:
* If the strings are the same length, return string1.*/

function getSmallerString(string1, string2) {
	if(string1.length<=string2.length)
	  return string1;
	else
	  return string2;
}
var output1 = getSmallerString('bears11111', 'battlestar');
console.log(output1); // --> 'bears'

var output2 = getSmallerString('unintended', 'scope');
console.log(output2); // --> 'scope'
