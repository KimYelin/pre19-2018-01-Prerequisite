/*Write a function called scoreToGrade that accepts a number as a parameter
and returns a string representing a letter grade corresponding to that score.

For example, the following grades should be returned given these scores:

'A' >= 90
'B' >= 80
'C' >= 70
'D' >= 60
'F' < 60*/

function scoreToGrade(score) {
  if(score >= 90)
    return 'A';
  else if(score >= 80 && score <90)
    return 'B';
  else if(score >= 70 && score <80)
    return 'C';
  else if(score >= 60 && score <70)
    return 'D';
  else
    return 'F';
}
console.log(scoreToGrade(95)); // => 'A'
console.log(scoreToGrade(72)); // => 'C'
console.log(scoreToGrade(50)); // => 'F'
