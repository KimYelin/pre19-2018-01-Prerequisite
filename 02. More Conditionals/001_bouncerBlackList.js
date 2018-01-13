/*Write a function called 'bouncerBlackList'.

This guy named "Joe" keeps blacking out at the bar that your function,
bouncer (from the previous module), is in charge of; thus, management
has decided to add him to the "blacklist" -- modify the bouncer function
from the previous section so that the person named "Joe" is rejected with
an appropriate message 'Go home Joe!', regardless of his age.*/

function bouncerBlackList(name, age) {
  if ( age > 20 && name !== 'Joe') {
  	return 'Welcome, ' + name + '!';
  }else if(name === 'Joe'){
    return 'Go home ' + name + '!';
  } else {
  	return 'Go home, ' + name + '.';
  }
}
console.log(bouncerBlackList("Amy", 20));
console.log(bouncerBlackList("Sandy", 21));
console.log(bouncerBlackList("Joe", 25));
