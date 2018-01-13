/*Write a function called 'bouncer'.

Given a string and an integer, in this case a name and an age, 'bouncer' returns a message that welcomes the patron, or tells them to go away.

Notes:
* The legal drinking age in the United States is 21.
* Pay close attention to the puncuation in your answer.*/

function bouncer(name, age) {
  if(age>=21)
    return "Welcome," + " " + name +"!";
  else
    return "Go home," + " " + name +".";
}
var output1 = bouncer('Tim', 34);
console.log(output1); // --> 'Welcome, Tim!'
//(*caution : ! (exclamation mark) at the end of "Tim")

var output2 = bouncer('Anne', 19);
console.log(output2); // --> 'Go home, Anne.'
