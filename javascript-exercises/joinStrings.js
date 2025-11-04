/*
 First name: Matheus
 Last name: Ambrozio
 This year: 2025
 Birth year: 2002

 The greeting should read: "Hello! My name is Matheus Abrozio and I am 23 years old."
*/

// Add your code right below, good luck!

const firstName = "Matheus";
const lastName = "Ambrozio";
const thisYear = 2025;
const birthYear = 2002;

const fullName = firstName + " " + lastName;
const age = thisYear - birthYear;
const greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";



// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}