// question of js output

// Q1
// function sayHi() {
//     console.log(name);  // --> undefiend
//     console.log(age);   // --> refrence error
//     var name = 'Lydia';
//     let age = 21;
// }

// sayHi();
// ----------------------------------------------------
// Q2  What's the output?
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);   // 3 3 3  --> beacause var has global scope  --> it will became 3 then after checkin i<3 it terminate and i will print 
// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);   // 0 1 2  --> let has block scope 
// }

// ----------------------------------------------------
// 3. What's the output?
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;  // normal function this refer to its immidate parent even in object --> 10 * 2 = 20
//   },
//   perimeter: () => 2 * Math.PI * this.radius, // arrow function this refer to the global or window scope not object --> 2 * 3.14 * undefined
// };

// console.log(shape.diameter());  // 20
// console.log(shape.perimeter()); // 2 * 3.14 * undefined --> NaN

// ----------------------------------------------------
// 4. What's the output?
// +true;  // +1  --> The unary plus tries to convert an operand to a number. true is 1, and false is 0.
// !'Lydia'; // false  --> The string 'Lydia' is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns false.

// ----------------------------------------------------
// 5. Which one is true?
// const bird = {
//   size: 'small',
// };

// const mouse = {
//   name: 'Mickey',
//   small: true,
// };

// console.log(mouse[bird.size])  // --> mouse[small]  (bird.size = small) --> RIGHT
// console.log(mouse[bird["size"]])  

// A: mouse.bird.size is not valid   ---> this is not vaild
// B: mouse[bird.size] is not valid   ---> this is vaild
// C: mouse[bird["size"]] is not valid  ---> 
// D: All of them are valid


// ----------------------------------------------------
// 6. What's the output?
// let c = { 
//     greeting: 'Hey!' 
// };

// let d;

// d = c;  // it will pass the refrence of the object c
// c.greeting = 'Hello';  // chaning the value deflect in both place
// console.log(d.greeting);
// console.log(c.greeting);


// ----------------------------------------------------
// 7. What's the output?
// let a = 3;
// let b = new Number(3);  // new Number() is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.
// let c = 3;

// console.log(a == b);  // true 
// console.log(a === b);  // false 
// console.log(b === c);  // false 


// ----------------------------------------------------
// 8. What's the output?
// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = 'green' } = {}) {
//     this.newColor = newColor;
//   }
// }

// const freddie = new Chameleon({ newColor: 'purple' });  
// console.log(freddie.colorChange('orange'));
// The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, 
// and cannot be passed down to any children or called upon class instances. Since freddie is an instance of class Chameleon, 
// the function cannot be called upon it. A TypeError is thrown.


// ----------------------------------------------------
// 9. What's the output?
// let greeting;
// greetign = {}; // Typo!
// console.log(greetign); // {}


// ----------------------------------------------------
// 10. What happens when we do this?
// function bark() {
//   console.log('Woof!');
// }

// bark.animal = 'dog';
// Nothing, this is totally fine!
// This is possible in JavaScript, because *****(functions are objects!)***** (Everything besides primitive types are objects)
// A *****(function is a special type of object)*****. The code you write yourself isn't the actual function. The function is an object with properties. 
// This property is invocable.


// ----------------------------------------------------
// 11. What's the output?
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person('Lydia', 'Hallie');
// Person.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());


// ----------------------------------------------------
// 11. What's the output?
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person('Lydia', 'Hallie');
// // In JavaScript, when you create an instance using the new keyword, it creates an object with a prototype link to 
// // the constructor function's prototype. If you add a method to the constructor function after creating an instance, that method won't 
// // be available on the existing instances.
// Person.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// // fixing and adding prototype it will fix the error
// Person.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`
// }

// console.log(member.getFullName());   // it will throw a error TypeError


// ----------------------------------------------------
// 12. What's the output?
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person('Lydia', 'Hallie');
// const sarah = Person('Sarah', 'Smith');

// console.log(lydia);  // Lydia Hallie
// console.log(sarah);  // undefined

// When a constructor is invoked with new, it creates a new object and sets this to that object. In the case of sarah, 
// since new is not used, this refers to the global object (or undefined in strict mode). 
// As a result, sarah does not become a Person instance, and its properties are not assigned to a new object. Therefore, 
// when you try to log sarah, it will be undefined.


// ----------------------------------------------------
// 13. What are the three phases of event propagation?
// A: Target > Capturing > Bubbling
// B: Bubbling > Target > Capturing
// C: Target > Bubbling > Capturing
// D: Capturing > Target > Bubbling
// Answer
// Answer: D
// During the capturing phase, the event goes through the ancestor elements down to the target element. It then reaches the target element, and bubbling begins.


// ----------------------------------------------------
// 14 All object have prototypes.
// A: true
// // B: false  ---> false
// All objects have prototypes, except for the base object. The base object is the object created by the user, or an object that is created using the new keyword. 
// The base object has access to some methods and properties, such as .toString. This is the reason why you can use built-in JavaScript methods! 
// All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain 
// and finds it there, which makes it accessible for you.


// ----------------------------------------------------
// 15. What's the output?
function sum(a, b) {
  return a + b;
}

sum(1, '2');  // ---> "12" / 12
// During the addition of a numeric type (1) and a string type ('2'), the number is treated as a string. We can concatenate strings like
//  "Hello" + "World", so what's happening here is "1" + "2" which returns "12".


// ----------------------------------------------------
// 16. What's the output?
// let number = 0;
// console.log(number++);  // 0 
// console.log(++number);  // 2
// console.log(number);    // 2 

// The postfix unary operator ++:
// Returns the value (this returns 0)
// Increments the value (number is now 1)

// The prefix unary operator ++:
// Increments the value (number is now 2)
// Returns the value (this returns 2)
// This returns 0 2 2.


// ----------------------------------------------------
// 17. What's the output?
// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const person = 'Lydia';
// const age = 21;

getPersonInfo`${person} is ${age} years old`;  // tagged tmeplate literal convert into array of string ["" , " is " , "years old"] Additionally, the values of person and age are logged:

// If you use tagged template literals, the value of the first argument is always an array of the string values. 
// The remaining arguments get the values of the passed expressions!


// ----------------------------------------------------
// 18. What's the output?
// function checkAge(data) {
//   if (data === { age: 18 }) {  // This condition will always return 'false' since JavaScript compares objects by reference, not value.
//     console.log('You are an adult!');
//   } else if (data == { age: 18 }) {  // 
//     console.log('You are still an adult.');
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }

// checkAge({ age: 18 });

// When testing equality, primitives are compared by their value, while objects are compared by their reference. 
// JavaScript checks if the objects have a reference to the same location in memory.

// The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location i
// n memory than the object we used in order to check equality.


// ----------------------------------------------------
// 19. What's the output?
// function getAge(...args) {
//   console.log(typeof args);  // object
// }

// getAge(21);
// The rest parameter (...args) lets us "collect" all remaining arguments into an array. An array is an object, so typeof args returns "object"


// ----------------------------------------------------
// 20. What's the output?
// function getAge() {
//   'use strict';
//   age = 21;
//   console.log(age);  // ReferenceError Error wether use "use strict"
// }

// getAge();
// With "use strict", you can make sure that you don't accidentally declare global variables. We never declared the variable age,
// and since we use "use strict", it will throw a reference error. If we didn't use "use strict", it would have worked, since the 
// property age would have gotten added to the global object.


// ----------------------------------------------------
