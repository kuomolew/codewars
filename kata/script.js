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

// function openOrSenior(data) {
//   return data.map((el) => {
//     return el[0] >= 55 && el[1] > 7 ? "Senior" : "Open";
//   });

// }

// let test = [
//   [45, 12],
//   [55, 21],
//   [19, -2],
//   [104, 20],
// ];

// // ['Open', 'Senior', 'Open', 'Senior']

// openOrSenior(test);

/////////////////////////////////////////////

//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// function order(words) {
//   if (!words) {
//     return words;
//   }
//   let wordsObject = {};
//   let sortedArray = [];
//   let wordsArray = words.split(' ');
//   let numbersArray = wordsArray.map((el) => {
//     for (char of el) {
//       if (+char) {
//         wordsObject[char] = el;
//         return char;
//       }
//     }
//   });
//   numbersArray.sort();
//   for (let i = 0; i < numbersArray.length; i++) {
//     sortedArray.push(wordsObject[numbersArray[i]]);
//   }
//   return sortedArray.join(' ');
// }

// let test = "is2 Thi1s T4est 3a";
// order(test);

/////////////////////////////////////////////

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// function isPangram(string) {
//   let alphabet = [];
//   for (let letter = 97; letter < 123; letter++) {
//     alphabet.push(String.fromCharCode(letter));
//   }
//   string = string.toLowerCase();
//   for (letter of string) {
//     if (alphabet.includes(letter)) {
//       alphabet.splice(alphabet.indexOf(letter), 1);
//     }
//   }
//   if (alphabet[0]) {
//     return false;
//   }
//   return true;
// }

// var string = "The quick brown fox jumps over the lazy dog.";

// isPangram(string);

////////////////////////////////////////////////////////

// replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.

// function alphabetPosition(text) {
//   let numbers = [];
//   text = text.toLowerCase();
//   for (letter of text) {
//     if(letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
//       numbers.push(letter.charCodeAt() - 96);
//     }
//   }
//   text = numbers.join(' ');
//   return text;
// }

// let test = 'The sunset sets at twelve o\' clock';
// alphabetPosition(test);