// function printerError(s) {
//   let all = 0;
//   let wrong = 0;
//   for (i of s) {
//     all++;
//     i > "m" ? wrong++ : i;
//   }
//   return `${wrong}/${all}`;
// }

// let a = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";

// printerError(a);

//////////////////////////////////////////////////////////////

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  if (s.length % 2 == 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    return s[Math.floor(s.length / 2)];
  }
}

let a = "";

getMiddle(a);
