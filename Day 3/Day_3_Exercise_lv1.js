//Question 1
let firstName = 'Moh', 
    lastName = 'Sanni', 
    country = 'Nigeria', 
    city = 'Ilorin', 
    age = '20', 
    isMarried = false, 
    year = 2022;

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

//Question 2
let value1 = '10', value2 = 10, typeofValue1 = typeof value1, typeofValue2 = typeof value2;
console.log(typeofValue1 == typeofValue2);

//Question 3
let float = parseInt('9.8');
let number = 10;
console.log(float == number)

//Question 4
console.log(4 > 3);
console.log(!false);
console.log('a' === 'a');
console.log(5 < 2);
console.log(0 === 1);
console.log(5 * 2 === '10');

//Question 5
//true
console.log(4 > 3);
//true
console.log(4 >= 3);
//false
console.log(4 < 3);
//false
console.log(4 <= 3);
//true
console.log(4 == 4);
//true
console.log(4 === 4);
//false
console.log(4 != 4);
//false
console.log(4 !== 4);
//true
console.log(4 !== '4');
//true
console.log(4 == '4');
//false
console.log(4 === '4');

let word = 'python';
let word1 = 'jargon';
console.log(word.length != word1.length);

//Question 6
console.log(4 > 3 && 10 > 12);
console.log(4 > 3) && (10 < 12);
console.log(4 > 3) || (10 < 12);
console.log(4 > 3) || (10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!('python'.includes('on') == 'dragon'.includes('on')));

//Question 7
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());