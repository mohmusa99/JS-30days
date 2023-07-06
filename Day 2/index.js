let challenge = '30 days Of JavaScript';
console.log(challenge);

console.log(challenge.length);

console.log(challenge.toUpperCase());

console.log(challenge.toLowerCase());

console.log(challenge.substr(0, 2));

console.log(challenge.substring(3, ));

console.log(challenge.includes("Script"));

console.log(challenge.split());

console.log(challenge.split(" "));

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(","));

console.log(challenge.replace("JavaScript", "Python"));

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt(11));

console.log(challenge.indexOf('a'));

console.log(challenge.lastIndexOf('a'));

let findFirstOccurrence = 'You cannot end a sentence with because because because is a conjunction';
console.log(findFirstOccurrence.indexOf('because'));

let findLastOccurrence = findFirstOccurrence.lastIndexOf('You cannot end a sentence with because because because is a conjunction')
console.log(findLastOccurrence);
console.log(findFirstOccurrence.search('because'));

let emptySpacedString = ' 30 Days of JavaScript';
console.log(emptySpacedString.trim());

console.log(challenge.startsWith('30'));

console.log(challenge.endsWith('JavaScript'));

console.log(challenge.match(/a/g));

let word_A = '30 Days of' , word_B = ' JavaScript';
console.log(word_A.concat(word_B));
console.log(challenge.repeat(2));


