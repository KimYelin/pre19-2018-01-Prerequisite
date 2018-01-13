/*Write a function called 'getLargerString'.

Given two strings, 'getLargerString' return the longer string.

Notes:
* If the strings are the same length, return string1.
*/

function getLargerString(string1, string2) {
  if(string1.length >= string2.length)
    return string1;
  else
    return string2;
}
var output1 = getLargerString('bears11111', 'battlestar');
console.log(output1); // --> 'battlestar'

var output2 = getLargerString('unintended', 'scope');
console.log(output2); // --> 'unintended'
