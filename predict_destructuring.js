// 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
// randomCar is not a function, so it will be referencing the 0th index and output tesla
// the ,otherrandomcar is the 1st index and will output mercedes

// 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);
// The syntax for getting the name is incorrect. The name: creates a new variable that the console.log will fetch, meaning name is not to be referenced
// othername will output elon

// 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
// console.logPASSWORD will output the password because it is declared outside of the object person
// hashedpassword console.log will be undefined because the password is not part of the object person, if you pur password within the function it will work

// 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
// The first boolean check will output fasle becasue the const first is referencing i[1] which is 2 and seeing if it is the same as second which is referencing the i[3] which is 5 2!=5 so false
// The 2nd log will output true, the first is i[2] while the third is referencing i[8] which is 2 2==2

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// The first console.log will output 'value'
// The second console.log will output the defined array
// The third console.log will output index 0 which is 1
// The fourth console.log will output i[1] which is 5

