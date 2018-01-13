/*You should have noticed a large amount of repetitive code when modifying
scoreToGrade to accommodate + or - grades. When we do lots of repetitive
things, that's a clear signal that there's a better way. Write a helper
function letterGrade that accepts two arguments, letter and score, and
works as follows:
*/

function letterGrade(letter, score) {
  if(score%10 <= 2)
    return letter + '-';
  else if (score%10 >= 8)
    return letter + '+';
  else
    return letter;
}

console.log(letterGrade('A', 95)); // => 'A'
console.log(letterGrade('A', 91)); // => 'A-'
console.log(letterGrade('B', 88)); // => 'B+'
console.log(letterGrade('monkey', 160)); // => 'monkey-'
