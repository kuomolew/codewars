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

// function getMiddle(s) {
//   if (s.length % 2 == 0) {
//     return s[s.length / 2 - 1] + s[s.length / 2];
//   } else {
//     return s[Math.floor(s.length / 2)];
//   }
// }

// let a = "";

// getMiddle(a);

///////////////////////////////////////

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// function DNAStrand(dna) {
//   let newDNA = "";
//   for (item of dna) {
//     if (item == "A") {
//       newDNA += "T";
//     } else if (item == "T") {
//       newDNA += "A";
//     } else if (item == "C") {
//       newDNA += "G";
//     } else {
//       newDNA += "C";
//     }
//   }
//   return newDNA;
// }

// let test = "ATTGC";
// DNAStrand(test);

/////////////////////////////////////////////

//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap. Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

function openOrSenior(data) {
  return data.map((el) => {
    return el[0] >= 55 && el[1] > 7 ? "Senior" : "Open";
  });

    
}

let test = [
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
];

// ['Open', 'Senior', 'Open', 'Senior']

openOrSenior(test);
