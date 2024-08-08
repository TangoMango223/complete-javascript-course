// Object Methods in JavaScript

// Any function attached to an object is called a "method"
// JS Object

// in JS Objects, you can store functions, see "calcAge"
const jonas = {
    firstName: "Jonas",
    lastName: 'Schemedtamann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
      },
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${
            this.hasDriversLicense ? 'a drivers license': 'no drivers license'}`;
    },
    getSummary2: function(){
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${
            this.hasDriversLicense ? 'a': 'no'} drivers license.`;
    },
    driving_status: function(){
        if (this.hasDriversLicense) {
            return `a driver's license`;
        } else {
            return `no driver's license`;
        }
    },

    // Another solution is to write it separately and then call it.
    // However, using ternary conditions is easier: c ? r:a
    getSummary3: function(){
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${
            this.driving_status()}`;}
}

    // calcAge: function () {
    //     //console.log(this);
    //     return 2037 - this.birthYear // this keyword = self.attr in Python
    // }

// Request age - call the function first.
// You need to call the function, then the result is creating a new property, "age". But it will show up here.
// console.log(jonas.calcAge());

// Since the property is created, we can directly access it:
// console.log(jonas["age"]);
// console.log(jonas["age"]);
// console.log(jonas["age"]);

// Coding challenge

// "Jonas is a 46 year old teacher, and he has a (or no) drivers license.""
// Create a function inside JS Object that will create this as a result.

// Call this method:
console.log(jonas.getSummary3());







// ---------- Notes ----------

// Call and Calculate:
// Bracket notation and dots notation both works
// console.log(jonas["calcAge"](1991));
// console.log(jonas.calcAge(1991));

// Use the "this" keyword to access another property in the same JS Object.
// this keyword = self.property in Python

// this will give you a breakdown of all properties part of the JS Object.


// Let's say you need age several times, you'd need to access age, so this will helps.
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());

// Better idea is to just calculate age as property.


