/*Write a function called countChars that accepts two parameters: a string and a character. This function should return a number representing the number of times that the character appears in string. To access the first element of a string, you can use the following syntax:

  access the element at index 0
"hello"[0]; // => "h"
"dog"[0]; // => "d"

HINT: You'll also need to make use of the slice method*/

function countChars(string, character) {
  //slice() => 새로운 배열 반환
  var howManyChars = 0;
  var string_arr = string.slice();
  for(var i = 0; i < string_arr.length ; i++){
    if(string_arr[i] === character)
      howManyChars++;
  }
  return howManyChars;
}
console.log(countChars('Hello, my name is michale jackson.', 'o'));
