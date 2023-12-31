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
// 21. What's the value of sum?
const sum = eval('10*10+5');
// A: 105   ----> 105
// B: "105"
// C: TypeError
// D: "10*10+5"


// ----------------------------------------------------
// 22. How long is cool_secret accessible?
sessionStorage.setItem('cool_secret', 123);
// A: Forever, the data doesn't get lost.
// B: When the user closes the tab.   -----> Right 
// C: When the user closes the entire browser, not only the tab.
// D: When the user shuts off their computer.

// The data stored in sessionStorage is removed after closing the tab.
// If you used localStorage, the data would've been there forever, unless for example localStorage.clear() is invoked.


// ----------------------------------------------------
// 23. What's the output?
var num = 8;
var num = 10;

// console.log(num);
// A: 8
// B: 10   ----> Right 
// C: SyntaxError
// D: ReferenceError

// With the var keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.
// You cannot do this with let or const since they're block-scoped and therefore can't be redeclared.


// ----------------------------------------------------
// 24. What's the output?
// const obj = { 1: 'a', 2: 'b', 3: 'c' };
// const set = new Set([1, 2, 3, 4, 5]);

// obj.hasOwnProperty('1');  // ---> true
// obj.hasOwnProperty(1);    // ---> true
// set.has('1');             // ---> false
// set.has(1);               // ---> true

// A: false true false true
// B: false true true true
// C: true true false true   ---> right
// D: true true true true

// All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why obj.hasOwnProperty('1') also returns true.
// It doesn't work that way for a set. There is no '1' in our set: set.has('1') returns false. It has the numeric type 1, set.has(1) returns true.


// ----------------------------------------------------
// 25. What's the output?
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
// A: { a: "one", b: "two" }
// B: { b: "two", a: "three" }
// C: { a: "three", b: "two" }   ---> right beacuse it will update the value
// D: SyntaxError


// ----------------------------------------------------
// 26. The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.
// A: true   --> right
// B: false
// C: it depends


// ----------------------------------------------------
// 27. What's the output?
// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }
// A: 1 2
// B: 1 2 3
// C: 1 2 4  -----> 3 will skip
// D: 1 3 4


// ----------------------------------------------------
// 28. What's the output?
// String.prototype.giveLydiaPizza = () => {
//   return 'Just give Lydia pizza already!';
// };

// const name = 'Lydia';

// console.log(name.giveLydiaPizza())  // ---> //"Just give Lydia pizza already!"
// A: "Just give Lydia pizza already!"
// B: TypeError: not a function
// C: SyntaxError
// D: undefined
// Answer
// Answer: A
// String is a built-in constructor, which we can add properties to. I just added a method to its prototype. 
// Primitive strings are automatically converted into a string object,
//  generated by the string prototype function. So, all strings (string objects) have access to that method!


// ----------------------------------------------------
// 29. What's the output?
// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);  // ---> a["[object object]"] = 456
// A: 123
// B: 456   ---> right
// C: undefined
// D: ReferenceError

// Object keys are automatically converted into strings. We are trying to set an object as a key to object a, with the value of 123.
// However, when we stringify an object, it becomes "[object Object]". So what we are saying here, is that a["[object Object]"] = 123. 
// Then, we can try to do the same again. c is another object that we are implicitly stringifying. So then, a["[object Object]"] = 456.
// Then, we log a[b], which is actually a["[object Object]"]. We just set that to 456, so it returns 456.


// ----------------------------------------------------
// 30. What's the output?
// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('Second'));
// const baz = () => console.log('Third');

// bar();
// foo();
// baz();
// A: First Second Third
// B: First Third Second   ---> right
// C: Second First Third
// D: Second Third First

// We have a setTimeout function and invoked it first. Yet, it was logged last.
// This is because in browsers, we don't just have the runtime engine, we also have something called a WebAPI. 
// The WebAPI gives us the setTimeout function to start with, and for example the DOM.
// After the callback is pushed to the WebAPI, the setTimeout function itself (but not the callback!) is popped off the stack.


// ----------------------------------------------------
// 31. What is the event.target when clicking the button?
{/* <div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div> */}

// amswer ----> button ----> second ---> first
// The deepest nested element that caused the event is the target of the event. You can stop bubbling by event.stopPropagation


// ----------------------------------------------------
// 32. When you click the paragraph, what's the logged output?
// <div onclick="console.log('div')">
//   <p onclick="console.log('p')">
//     Click here!
//   </p>
// </div>
// A: p div    ----> answer
// B: div p
// C: p
// D: div
// If we click p, we see two logs: p and div. During event propagation, there are 3 phases: capturing, target, and bubbling. 
// By default, event handlers are executed in the bubbling phase (unless you set useCapture to true). It goes from the deepest nested element outwards.


// ----------------------------------------------------
//33. What's the output?
// const person = { name: 'Lydia' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));
// A: undefined is 21 Lydia is 21
// B: function function
// C: Lydia is 21 Lydia is 21
// D: Lydia is 21 function   ----> answer
 
// With both, we can pass the object to which we want the this keyword to refer to. However, .call is also executed immediately!
// .bind. returns a copy of the function, but with a bound context! It is not executed immediately.


// ----------------------------------------------------
// 34. What's the output?
// function sayHi() {
//   return (() => 0)();
// }

// console.log(typeof sayHi());        //  ---> number

// The sayHi function returns the returned value of the immediately invoked function expression (IIFE). This function returned 0, which is type "number".
// FYI: typeof can return the following list of values: undefined, boolean, number, bigint, string, symbol, function and object. Note that typeof null returns "object".


// ----------------------------------------------------
// 35. Which of these values are falsy?
// 0;
// new Number(0);
// ('');
// (' ');
// new Boolean(false);
// undefined;
// A: 0, '', undefined    ----> answer

// There are 8 falsy values:
// undefined
// null
// NaN
// false
// '' (empty string)
// 0
// -0
// 0n (BigInt(0))
// Function constructors, like new Number and new Boolean are truthy.


// ----------------------------------------------------
// 36. What's the output?
// console.log(typeof typeof 1);
// A: "number"
// B: "string"    ---> answer
// C: "object"
// D: "undefined"

// typeof 1 returns "number". typeof "number" returns "string"


// ----------------------------------------------------
// 37. What's the output?
// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);
// A: [1, 2, 3, null x 7, 11]
// B: [1, 2, 3, 11]
// C: [1, 2, 3, empty x 7, 11]  ------> answer
// D: SyntaxError

// When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". 
// These actually have the value of undefined, but you will see something like:
// [1, 2, 3, empty x 7, 11] depending on where you run it (it's different for every browser, node, etc.)


// ----------------------------------------------------
// 38. What's the output?
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
// A: 1 undefined 2        ------> answer
// B: undefined undefined undefined
// C: 1 1 2
// D: 1 undefined undefined

// The catch block receives the argument x. This is not the same x as the variable when we pass arguments. This variable x is block-scoped.
// Later, we set this block-scoped variable equal to 1, and set the value of the variable y. Now, we log the block-scoped variable x, which is equal to 1.
// Outside of the catch block, x is still undefined, and y is 2. When we want to console.log(x) outside of the catch block, it returns undefined, and y returns 2.


// ----------------------------------------------------
// 40. What's the output?
// [[0, 1], [2, 3]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2], // ---> initial value of array 
// );
// A: [0, 1, 2, 3, 1, 2]
// B: [6, 1, 2]
// C: [1, 2, 0, 1, 2, 3]   ----> answer
// D: [1, 2, 6]

// [1, 2] is our initial value. This is the value we start with, and the value of the very first acc. During the first round, acc is [1,2], and cur is [0, 1]. 
// We concatenate them, which results in [1, 2, 0, 1].Then, [1, 2, 0, 1] is acc and [2, 3] is cur. We concatenate them, and get [1, 2, 0, 1, 2, 3]


// ----------------------------------------------------
// 41. What's the output?
!!null;  // ---> !null = 1   !1 = false
!!'';   // ---> !"" = 1  !1 = false
!!1;    // --->  !1 = 0/false    !false == true 
// A: false true false
// B: false false true   -----> answer
// C: false true true
// D: true true false

// null is falsy. !null returns true. !true returns false.
// "" is falsy. !"" returns true. !true returns false.
// 1 is truthy. !1 returns false. !false returns true.


// ----------------------------------------------------
// 42. What does the setInterval method return in the browser?
// setInterval(() => console.log('Hi'), 1000);
// A: a unique id     -------> answer
// B: the amount of milliseconds specified
// C: the passed function
// D: undefined

// It returns a unique id. This id can be used to clear that interval with the clearInterval() function.


// ----------------------------------------------------
// 43. What does this return?
// [...'Lydia'];
// A: ["L", "y", "d", "i", "a"]


// ----------------------------------------------------
// 44. What's the output?
// function* generator(i) {
//   yield i;
//   yield i * 2;
// }

// const gen = generator(10);

// console.log(gen.next().value);  // ----> 10 , 20
// console.log(gen.next().value);
// A: [0, 10], [10, 20]
// B: 20, 20
// C: 10, 20   ----> answer 
// D: 0, 10 and 10, 20
// Answer
// Answer: C
// Regular functions cannot be stopped mid-way after invocation. However, a generator function can be "stopped" midway, 
// and later continue from where it stopped. Every time a generator function encounters a yield keyword, the function yields 
// the value specified after it. Note that the generator function in that case doesn’t return the value, it yields the value.
// First, we initialize the generator function with i equal to 10. We invoke the generator function using the next() method. 
// The first time we invoke the generator function, i is equal to 10. It encounters the first yield keyword: it yields the value of i. 
// The generator is now "paused", and 10 gets logged.Then, we invoke the function again with the next() method.
// It starts to continue where it stopped previously, still with i equal to 10. Now, it encounters the next yield keyword, and yields i * 2. i is equal to 10, 
// so it returns 10 * 2, which is 20. This results in 10, 20.


// ----------------------------------------------------
// 45. What does this return?
// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, 'one');
// });

// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, 'two');
// });

// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));   /// ----> two 
// A: "one"
// B: "two"   ---> amswer
// C: "two" "one"
// D: "one" "two"
// Answer
// Answer: B
// When we pass multiple promises to the Promise.race method, it resolves/rejects the first promise that resolves/rejects. 
// To the setTimeout method, we pass a timer: 500ms for the first promise (firstPromise), and 100ms for the second promise (secondPromise). 
// This means that the secondPromise resolves first with the value of 'two'. res now holds the value of 'two', which gets logged.


// ----------------------------------------------------
// 46. What's the output?
// let person = { name: 'Lydia' };
// const members = [person];   //// -----> [{name: "Lydia"}]
// person = null;
// console.log(person)    /// ----> null
// console.log(members); 

// let person = { name: 'Lydia' };
// person = null;
// const members = [person];   //// -----> [null]
// console.log(person)
// console.log(members); 
// A: null
// B: [null]
// C: [{}]
// D: [{ name: "Lydia" }]  -------> answer
// Answer
// Answer: D
// First, we declare a variable person with the value of an object that has a name property.
// Then, we declare a variable called members. We set the first element of that array equal to the value of the person variable. 
// Objects interact by reference when setting them equal to each other. When you assign a reference from one variable to another, 
// you make a copy of that reference. (note that they don't have the same reference!)
// Then, we set the variable person equal to null.We are only modifying the value of the person variable, and not the first element
// in the array, since that element has a different (copied) reference to the object. The first element in members still holds its reference to the original object. 
// When we log the members array, the first element still holds the value of the object, which gets logged.


// ----------------------------------------------------
// 47. What's the output?
// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// for (const item in person) {
//   console.log(item);
// }
// A: { name: "Lydia" }, { age: 21 }
// B: "name", "age"    ------> answer
// C: "Lydia", 21
// D: ["name", "Lydia"], ["age", 21]

// With a for-in loop, we can iterate through object keys, in this case name and age. Under the hood, object keys are strings 
// (if they're not a Symbol). On every loop, we set the value of item equal to the current key it’s iterating over. First, item is equal to name, 
// and gets logged. Then, item is equal to age, which gets logged.


// ----------------------------------------------------
// 48. What's the output? 
// console.log(3 + 4 + '5');   // -----> 7 + "5" = "75"
// A: "345"
// B: "75"   ----> answer
// C: 12
// D: "12"

// Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. 
// This only happens if all operators have the same precedence. We only have one type of operator: +. For addition, the associativity is left-to-right.
// 3 + 4 gets evaluated first. This results in the number 7.
// 7 + '5' results in "75" because of coercion. JavaScript converts the number 7 into a string, see question 15
// . We can concatenate two strings using the +operator. "7" + "5" results in "75".


// ----------------------------------------------------
// 49. What's the value of num?
const num = parseInt('7*6', 10);   // ------> start with 7 and * encounter its stop and take only 7 , 2nd args is base 
// A: 42
// B: "42"
// C: 7   -----> answer 
// D: NaN

// Only the first numbers in the string is returned. Based on the radix (the second argument in order to specify what type of number we want to parse it to: 
// base 10, hexadecimal, octal, binary, etc.), the parseInt checks whether the characters in the string are valid. Once it encounters a character that isn't a
// valid number in the radix, it stops parsing and ignores the following characters.
// * is not a valid number. It only parses "7" into the decimal 7. num now holds the value of 7.


// ----------------------------------------------------
// 50. What's the output?
// [1, 2, 3].map(num => {
//   if (typeof num === 'number') // return;  ----> undefined
//   return num * 2;
// });
// A: []
// B: [null, null, null]
// C: [undefined, undefined, undefined]
// D: [ 3 x empty ]

// When mapping over the array, the value of num is equal to the element it’s currently looping over. In this case, the elements are numbers, 
// so the condition of the if statement typeof num === "number" returns true. The map function creates a new array and inserts the values returned from the function.
// However, we don’t return a value. When we don’t return a value from the function, the function returns undefined. For every element in the array, the function block
//  gets called, so for each element we return undefined.


// ----------------------------------------------------
// 51. What's the output?
function getInfo(member, year) {
  member.name = 'Lydia';
  year = '1998';
}

const person = { name: 'Sarah' };
const birthYear = '1997';

getInfo(person, birthYear);

console.log(person, birthYear);
// A: { name: "Lydia" }, "1997"   ----> answer
// B: { name: "Sarah" }, "1998"
// C: { name: "Lydia" }, "1998"
// D: { name: "Sarah" }, "1997"

// Arguments are passed by value, unless their value is an object, then they're passed by reference. birthYear is passed by value, since it's a string, not an object. 
// When we pass arguments by value, a copy of that value is created (see question 46).
// The variable birthYear has a reference to the value "1997". The argument year also has a reference to the value "1997", 
// but it's not the same value as birthYear has a reference to. When we update the value of year by setting year equal to "1998", 
// we are only updating the value of year. birthYear is still equal to "1997".
// The value of person is an object. The argument member has a (copied) reference to the same object. When we modify a property of the object member has a reference to, 
// the value of person will also be modified, since they both have a reference to the same object. person's name property is now equal to the value "Lydia"


// ----------------------------------------------------
// 52. What's the output?
function greeting() {
  throw 'Hello world!';
}

function sayHi() {
  try {
    const data = greeting();
    console.log('It worked!', data);
  } catch (e) {
    console.log('Oh no an error:', e);
  }
}

sayHi();
// A: It worked! Hello world!
// B: Oh no an error: undefined
// C: SyntaxError: can only throw Error objects
// D: Oh no an error: Hello world!    ----> answer

// With the throw statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a string, a number, a 
// boolean or an object. In this case, our exception is the string 'Hello world!'.
// With the catch statement, we can specify what to do if an exception is thrown in the try block. An exception is thrown: the string 'Hello world!'.
//  e is now equal to that string, which we log. This results in 'Oh an error: Hello world!'.


// ----------------------------------------------------
// 53. What's the output?
// function Car() {
//   this.make = 'Lamborghini';
//   return { make: 'Maserati' };
// }

// const myCar = new Car();
// console.log(myCar.make);
// A: "Lamborghini"
// B: "Maserati"   ----> answer
// C: ReferenceError
// D: TypeError

// When a constructor function is called with the new keyword, it creates an object and sets the this keyword to refer to that object. By default, if the constructor function 
// doesn't explicitly return anything, it will return the newly created object.
// In this case, the constructor function Car explicitly returns a new object with make set to "Maserati", which overrides the default behavior.
//  Therefore, when new Car() is called, the returned object is assigned to myCar, resulting in the output being "Maserati"  when myCar.make is accessed.


// ----------------------------------------------------
// 54. What's the output?
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
// A: "undefined", "number"   ----> answer
// B: "number", "number"
// C: "object", "number"
// D: "number", "undefined"

// let x = (y = 10); is actually shorthand for:

// y = 10;
// let x = y;
// When we set y equal to 10, we actually add a property y to the global object (window in browser, global in Node). In a browser, window.y is now equal to 10.
// Then, we declare a variable x with the value of y, which is 10. Variables declared with the let keyword are block scoped, they are only defined within the block 
// they're declared in; the immediately invoked function expression (IIFE) in this case. When we use the typeof operator, the operand x is not defined: we are trying 
// to access x outside of the block it's declared in. This means that x is not defined. Values who haven't been assigned a value or declared are of type "undefined".
//  console.log(typeof x) returns "undefined".However, we created a global variable y when setting y equal to 10. This value is accessible anywhere in our code. y is defined, 
//  and holds a value of type "number". console.log(typeof y) returns "number".


// ----------------------------------------------------
// 55. What's the output?
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog('Mara');

pet.bark();

delete Dog.prototype.bark;

pet.bark();
// A: "Woof I am Mara", TypeError   ----> answer 
// B: "Woof I am Mara", "Woof I am Mara"
// C: "Woof I am Mara", undefined
// D: TypeError, TypeError

// We can delete properties from objects using the delete keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore 
// in the prototype chain. In this case, the bark function is not available anymore on the prototype after delete Dog.prototype.bark, yet we still try to access it.
// When we try to invoke something that is not a function, a TypeError is thrown. In this case TypeError: pet.bark is not a function, since pet.bark is undefined.


// ----------------------------------------------------
// 56. What's the outp ut?
// const set = new Set([1, 1, 2, 3, 4]);

// console.log(set);
// A: [1, 1, 2, 3, 4]
// B: [1, 2, 3, 4]
// C: {1, 1, 2, 3, 4}
// D: {1, 2, 3, 4}  ---> set return a object / collection answer

// The Set object is a collection of unique values: a value can only occur once in a set.
// We passed the iterable [1, 1, 2, 3, 4] with a duplicate value 1. Since we cannot have two of the same values in a set, one of them is removed. This results in {1, 2, 3, 4}.


// ----------------------------------------------------
// 57. What's the output?
// counter.js
// let counter = 10;
// export default counter;
// // index.js
// import myCounter from './counter';

// myCounter += 1;
// console.log(myCounter);   ---> error 
// A: 10
// B: 11
// C: Error    >>>> answer
// D: NaN

// An imported module is read-only: you cannot modify the imported module. Only the module that exports them can change its value.
// When we try to increment the value of myCounter, it throws an error: myCounter is read-only and cannot be modified.


// ----------------------------------------------------
// 58. What's the output?
// const name = 'Lydia';
// age = 21;

// console.log(delete name);    ---> false 
// console.log(delete age);   ----> true 
// A: false, true
// B: "Lydia", 21
// C: true, true
// D: undefined, undefined

// The delete operator returns a boolean value: true on a successful deletion, else it'll return false. However, variables declared with the var, 
// const or let keyword cannot be deleted using the delete operator.
// The name variable was declared with a const keyword, so its deletion is not successful: false is returned. When we set age equal to 21, 
// we actually added a property called age to the global object. You can successfully delete properties from objects this way, also the global object, so delete age returns true.


// ----------------------------------------------------
// 59. What's the output?
// const numbers = [1, 2, 3, 4, 5];
// const [y] = numbers;

// console.log(y);
// A: [[1, 2, 3, 4, 5]]
// B: [1, 2, 3, 4, 5]
// C: 1   ----> answer 
// D: [1]

// We can unpack values from arrays or properties from objects through destructuring. For example:
// [a, b] = [1, 2];
// The value of a is now 1, and the value of b is now 2. What we actually did in the question, is:
// [y] = [1, 2, 3, 4, 5];
// This means that the value of y is equal to the first value in the array, which is the number 1. When we log y, 1 is returned.


// ----------------------------------------------------
// 60. What's the output?
// const user = { name: 'Lydia', age: 21 };
// const admin = { admin: true, ...user };

// console.log(admin);
// A: { admin: true, user: { name: "Lydia", age: 21 } }
// B: { admin: true, name: "Lydia", age: 21 }
// C: { admin: true, user: ["Lydia", 21] }
// D: { admin: true }

// It's possible to combine objects using the spread operator .... It lets you create copies of the key/value pairs of one object, and add them to another object. 
// In this case, we create copies of the user object, and add them to the admin object. The admin object now contains the copied key/value pairs, which results 
// in { admin: true, name: "Lydia", age: 21 }.


// ----------------------------------------------------













// ----------------------------------------------------
// 62. What's the output?
const settings = {
  username: 'lydiahallie',
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ['level', 'health']);  // answer stringify method 2 argument of array only stringify the value
console.log(data);
// A: "{"level":19, "health":90}"
// B: "{"username": "lydiahallie"}"
// C: "["level", "health"]"         --------> answer stringify method 2 argument of array only stringify the value
// D: "{"username": "lydiahallie", "level":19, "health":90}"

// The second argument of JSON.stringify is the replacer. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.
// If the replacer is an array, only the property names included in the array will be added to the JSON string.
//  In this case, only the properties with the names "level" and "health" are included,
//  "username" is excluded. data is now equal to "{"level":19, "health":90}".
// If the replacer is a function, this function gets called on every property in the object you're stringifying. 
// The value returned from this function will be the value of the property when it's added to the JSON string. If the value is undefined,
// this property is excluded from the JSON string.



// ----------------------------------------------------
// 63. What's the output?
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();    // 10
const num2 = increasePassedNumber(num1);   /// 10

console.log(num1);
console.log(num2);
// A: 10, 10
// B: 10, 11
// C: 11, 11
// D: 11, 12

// The unary operator ++ first returns the value of the operand, then increments the value of the operand. The value of num1 is 10, 
// since the increaseNumber function first returns the value of num, which is 10, and only increments the value of num afterwards.
// num2 is 10, since we passed num1 to the increasePassedNumber. number is equal to 10(the value of num1). Again, the unary operator ++ first
//  returns the value of the operand, then increments the value of the operand. The value of number is 10, so num2 is equal to 10.


// ----------------------------------------------------
// 64. What's the output?
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();    // 20
multiply();    // 20 
multiply(value);   // 20
multiply(value);   // 40
// A: 20, 40, 80, 160
// B: 20, 40, 20, 40
// C: 20, 20, 20, 40
// D: NaN, NaN, 20, 40

// In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, if no other value has 
// been passed to the function, or if the value of the parameter is "undefined". In this case, we spread the properties of the value object 
// into a new object, so x has the default value of { number: 10 }.
// The default argument is evaluated at call time! Every time we call the function, a new object is created. We invoke the multiply function 
// the first two times without passing a value: x has the default value of { number: 10 }. We then log the multiplied value of that number, 
// which is 20.
// The third time we invoke multiply, we do pass an argument: the object called value. The *= operator is actually shorthand for x.number = x.number * 2: 
// we modify the value of x.number, and log the multiplied value 20.
// The fourth time, we pass the value object again. x.number was previously modified to 20, so x.number *= 2 logs 40.


// ----------------------------------------------------
// 65. What's the output?
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
// A: 1 2 and 3 3 and 6 4
// B: 1 2 and 2 3 and 3 4
// C: 1 undefined and 2 undefined and 3 undefined and 4 undefined
// D: 1 2 and undefined 3 and undefined 4    ------> answer

// The first argument that the reduce method receives is the accumulator, x in this case. The second argument is the current value, y. 
// With the reduce method, we execute a callback function on every element in the array, which could ultimately result in one single value.
// In this example, we are not returning any values, we are simply logging the values of the accumulator and the current value.
// The value of the accumulator is equal to the previously returned value of the callback function. If you don't pass the optional 
// initialValue argument to the reduce method, the accumulator is equal to the first element on the first call.
// On the first call, the accumulator (x) is 1, and the current value (y) is 2. We don't return from the callback function, we log the 
// accumulator and current value: 1 and 2 get logged.If you don't return a value from a function, it returns undefined. On the next call, the accumulator is undefined, and the current value 
// is 3. undefined and 3 get logged.On the fourth call, we again don't return from the callback function. The accumulator is again undefined, and the current value is 4. 
// undefined and 4 get logged.



// ----------------------------------------------------
// 66. With which constructor can we successfully extend the Dog class?
class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  // 1
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

};
// A: 1
// B: 2
// C: 3
// D: 4

// In a derived class, you cannot access the this keyword before calling super. If you try to do that, it will throw a 
// ReferenceError: 1 and 4 would throw a reference error.
// With the super keyword, we call that parent class's constructor with the given arguments. The parent's constructor 
// receives the name argument, so we need to pass name to super.
// The Labrador class receives two arguments, name since it extends Dog, and size as an extra property on the Labrador class. 
// They both need to be passed to the constructor function on Labrador, which is done correctly using constructor 2.


// ----------------------------------------------------
// 67. What's the output?
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;
// A: running index.js, running sum.js, 3
// B: running sum.js, running index.js, 3
// C: running sum.js, 3, running index.js
// D: running index.js, undefined, running sum.js

// With the import keyword, all imported modules are pre-parsed. This means that the imported modules get run first, the code in the file 
// which imports the module gets executed after.
// This is a difference between require() in CommonJS and import! With require(), you can load dependencies on demand while the code is 
// being run. If we would have used require instead of import, running index.js, running sum.js, 3 would have been logged to the console.



// ----------------------------------------------------
// 68. What's the output?
console.log(Number(2) === Number(2));   /// -----> true
console.log(Boolean(false) === Boolean(false));   /// -----> true
console.log(Symbol('foo') === Symbol('foo'));    //// -----> false
// A: true, true, false
// B: false, true, false
// C: true, false, true
// D: true, true, true
Answer
Answer: A
// Every Symbol is entirely unique. The purpose of the argument passed to the Symbol is to give the Symbol a description. The value of 
// the Symbol is not dependent on the passed argument. As we test equality, we are creating two entirely new symbols: the first 
// Symbol('foo'), and the second Symbol('foo'). These two values are unique and not equal to each other, Symbol('foo') === Symbol('foo') 
// returns false.



// ----------------------------------------------------
// 69. What's the output?
const name = 'Lydia Hallie';
console.log(name.padStart(13));
console.log(name.padStart(2));
// A: "Lydia Hallie", "Lydia Hallie"
// B: " Lydia Hallie", " Lydia Hallie" ("[13x whitespace]Lydia Hallie", "[2x whitespace]Lydia Hallie")
// C: " Lydia Hallie", "Lydia Hallie" ("[1x whitespace]Lydia Hallie", "Lydia Hallie")
// D: "Lydia Hallie", "Lyd",

// With the padStart method, we can add padding to the beginning of a string. The value passed to this method is the total length of the 
// string together with the padding. The string "Lydia Hallie" has a length of 12. name.padStart(13) inserts 1 space at the start of the 
// string, because 12 + 1 is 13. If the argument passed to the padStart method is smaller than the length of the array, no padding will be added.


// ----------------------------------------------------
// 70. What's the output?
console.log('🥑' + '💻');
// A: "🥑💻" ------> answer
// B: 257548
// C: A string containing their code points
// D: Error

// With the + operator, you can concatenate strings. In this case, we are concatenating the string "🥑" with the string "💻", 
// resulting in "🥑💻".

