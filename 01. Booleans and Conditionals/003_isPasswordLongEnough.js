/*Write a function called 'isPasswordLongEnough'.
Given a string and a integer, in this case a password and a minimum required length, 'isPasswordLongEnough' return whether the inputted password is long enough.*/

function isPasswordLongEnough(password, minimumLength) {
	if(password.length >= minimumLength)
	  return true;
	else
	  return false;
}

var output1 = isPasswordLongEnough('unicorn', 6);
console.log(output1); // --> true

var output2 = isPasswordLongEnough('intended', 14);
console.log(output2); // --> false
