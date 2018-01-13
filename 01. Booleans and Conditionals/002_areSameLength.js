/*Write a function called 'areSameLength'.
Given two strings, 'areSameLength' returns true if they are of the same length, and false otherwise.
*/

function areSameLength(string1, string2) {
  if(string1.length === string2.length)
   return true;
  else
   return false;
}
var output1 = areSameLength('they', 'care');
console.log(output1); // --> true

var output2 = areSameLength('we', 'differ');
console.log(output2);
