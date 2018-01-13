/*Write a function called "convertScoreToGradeWithPlusAndMinus".

Given a score, "convertScoreToGradeWithPlusAndMinus" returns a
string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (59  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should
return 'INVALID SCORE'.
* If the score is between the 0 and 2 (inclusive) of a given range,
return the letter with a '-'
* If the score is between the 8 and 9 (inclusive) of a given range,
return the letter with a '+'
* There are is no F+ and there is no F-.*/

function convertScoreToGradeWithPlusAndMinus(score) {
  /*var detailGrade = score % 10;
  var plusMinus = '';
  if (detailGrade >= 0 && detailGrade < 3)
    plusMinus = '-';
  else
    plusMinus = '+';


  if(score >100 || score < 0)
    return 'INVALID SCORE';
  else if(score >= 90)
    return 'A'+plusMinus;
  else if(score >= 80 && score <90)
    return 'B'+plusMinus;
  else if(score >= 70 && score <80)
    return 'C'+plusMinus;
  else if(score >= 60 && score <70)
    return 'D'+plusMinus;
  else if(score < 60)
    return 'F';*/

  if(score >100 || score < 0)
    return 'INVALID SCORE';
  else if(score >= 90){
    if(score%10 <3)
      return 'A-';
    else if(score%10 >= 8)
      return 'A+';
  }
  else if(score >= 80 && score <90){
    if(score%10 <3)
      return 'B-';
    else if(score%10 >= 8)
      return 'B+';
  }
  else if(score >= 70 && score <80){
    if(score%10 <3)
      return 'C-';
    else if(score%10 >= 8)
      return 'C+';
  }
  else if(score >= 60 && score <70){
    if(score%10 <3)
      return 'D-';
    else if(score%10 >= 8)
      return 'D+';
  }
  else if(score < 60)
    return 'F';
}

var output1 = convertScoreToGradeWithPlusAndMinus(91);
var output2 = convertScoreToGradeWithPlusAndMinus(67);
var output3 = convertScoreToGradeWithPlusAndMinus(-20);
var output4 = convertScoreToGradeWithPlusAndMinus(99);

console.log(output1); // --> 'A-'
console.log(output2); // --> 'A-'
console.log(output3); // --> 'A-'
console.log(output4); // --> 'A-'
