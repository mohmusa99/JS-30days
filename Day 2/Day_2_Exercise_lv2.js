//Question 1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

//Question 2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same\n with charity you give love, so don't just give money but reach out your hand instead.");

//Question 3
let str = "10", num = 10
let typeofStr = (typeof str);
let typeofNum = (typeof num);
console.log(typeofStr===typeofNum); 
let newStr = parseInt(str), typeofnewStr = (typeof newStr)
console.log(typeofnewStr===typeofNum); 

//Question 4
console.log(parseFloat("9.8")==10);
let gravity = parseFloat("9.8");
gravity = Math.ceil(gravity);
console.log(gravity == 10);

//Question 5
let wordA = 'python', wordB = 'jargon';
console.log(wordA.includes('on'));
console.log(wordB.includes('on'));

//Question 6
let sentence = 'I hope this course is not full of jargon.';
console.log(sentence.includes('jargon'));

//Question 7 
let randNum = Math.random(), 
    numBtw_0_100 = Math.round(101 * randNum);
    console.log(numBtw_0_100);

//Question 8
let randomNum = Math.random() * 51,
    numBtw_50_100 = Math.round(50 + randomNum);
    console.log(numBtw_50_100);

//Question 9
let random_Number = Math.random();
let number = random_Number * 256;
console.log(Math.round(number));

//Question 10
let rand_Num = Math.ceil(Math.random() + 8);
let word = 'JavaScript';
console.log(word[rand_Num])

//Question 11
let numberMatrix = '1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125';
console.log(numberMatrix);

//Question 12
let sentence_1 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence_1.substr(35,23));