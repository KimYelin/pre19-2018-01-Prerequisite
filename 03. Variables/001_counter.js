/*Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation.

For instance:

counter(); => 1
counter(); => 2
counter(); => 3

HINT: You'll need a variable for this (call it 'count'). Where should the variable be declared?*/

var count = 0;
function counter() {
  return ++count;
}
console.log(counter()); //=> 1
console.log(counter()); //=> 2
console.log(counter()); //=> 3
console.log(counter()); //=> 1
console.log(counter()); //=> 2
console.log(counter()); //=> 3
