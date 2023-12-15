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
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
// Nothing, this is totally fine!
// This is possible in JavaScript, because *****(functions are objects!)***** (Everything besides primitive types are objects)
// A *****(function is a special type of object)*****. The code you write yourself isn't the actual function. The function is an object with properties. 
// This property is invocable.


// ----------------------------------------------------
// 11. What's the output?
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());