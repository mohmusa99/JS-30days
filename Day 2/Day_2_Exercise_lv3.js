//Question 1
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi;
console.log(sentence.match(pattern));

//Question 2
let sentence_1 = 'You cannot end a sentence with because because because is a conjunction';
let pattern_1 = /because/gi;
console.log(sentence_1.match(pattern_1));

//Question 3
const sentence_2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let new_sentence_2  = sentence_2.replace(/[^a-zA-Z0-9 ]/g, '');

console.log(new_sentence_2);

//Question 4
let earning_1 = 5000;
let earning_2 = 10000;
let earning_3 = 15000;
let salary = earning_1 * 12;
let annualBonus = earning_2 * 1
let onlineCourse = earning_3 * 12
const totalAnnualIncome = salary + annualBonus + onlineCourse;
console.log(totalAnnualIncome);