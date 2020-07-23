// alert("Alert - holds the execution of the script unless it's executed")
console.log("This prints in the Web-browser's console")
console.error("This return error statement in the console")
console.warn("This gives a warning in the console")



// Variables using var,const,let
/* 'var' is globally scoped and hence not to be preferrably used.
   'let' and 'const' have block level scope.
   'let' for variables and 'const' for literals.
 */
let a = 1
a += 10
console.log(a)

const b = 331
// b += 1 ---> This cannot be done we cannot change a constant.
console.log(b)



// Primitive Data-types: TypeScript is a part of JS with static typing while JS doesn't have it.
// string, number, boolean, null, undefined, symbol
const string1 = 'aarav';
const string2 = "Aarav"; // ';' is optional
const number1 = 3.0;
const number2 = 2;
const boolean1 = true;
const null1 = null;
const undefined1 = undefined;
let undefined2; // also undefined

console.log(typeof string1);
console.log(typeof string2);
console.log(typeof number1);
console.log(typeof number2);
console.log(typeof boolean1);
console.log(typeof null1); // return 'object' which is bogus. 
console.log(typeof undefined1);
console.log(typeof undefined2);



/* Strings */

const name = "Aarav Chandra"
const age = 86

// Concatenation:
console.log('My name is ' + name + ' and I am ' + age + ' years old.'); // old way
console.log(`This is the template string way of print\n my name - ${name} and age - ${age}`); // Template string way ~ F-string of python.
const string3 = `\n\n\tYo Yo ${name} Singh\n\n`
console.log(string3)

console.log(name.length) // length property to find length of a string. if '()' after length then its a method.
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0, 5)); // not including 5
console.log(name.substring(5).toUpperCase()); // from index 5 till end.
console.log(name.split('')); // it splits by letters and returns array with char values.



/* Arrays */

const array1 = new Array(1, 2, 3, 4, 5, 6, 7);
console.log(array1)

const fruits1 = ['oranges', 'lichi', 'dragon fruit', 'grape fruit', 10] // It is like a list in python.
console.log(fruits1)
fruits1.push(true) // appends to the array.
console.log(fruits1)
fruits1.unshift('Aarav') // adds element to the front of the array.
console.log(fruits1)
fruits1.shift() // removes the front element of the array.
console.log(fruits1)
console.log(Array.isArray(fruits1)) // checks if this is an array.
console.log(fruits1.indexOf('lichi'))



/* Object Literals = key:value pairs */

const person1 = {
  fname: "Aarav",
  lname: "Chandra",
  superpower: ["extremely awesome B)", "Guitarist", "Great Cook"],
  address: {
    india: "ghar",
    france: "maison"
  }
};
console.log(person1.address.france);
console.log(person1.address.india, person1.superpower[0]);

// Destructuring allows us to pull variable(s) and make them independent.
const { fname, lname, address: { india } } = person1; // It not assigning but more like pulling these values from 'person'.
console.log(lname, "\n", india)

// Adding property to an onject literal
person1.email = 'abc@XYZ.com';
console.log(person1);

// Arrays of Objects

const things_to_do = [
  {
    id: 1,
    work: 'take out trash',
    statusCompleted: true
  },
  {
    id: 2,
    work: 'Meditate',
    statusCompleted: true
  },
  {
    id: 3,
    work: 'Practice guitar',
    statusCompleted: true
  },
  {
    id: 4,
    work: 'Go for run',
    statusCompleted: true
  },
  {
    id: 5,
    work: 'Cook food',
    statusCompleted: true
  },
];

console.log(things_to_do)
console.log(things_to_do[2].work)



/* JSON */

things_to_do_JSON = JSON.stringify(things_to_do)
console.log(things_to_do_JSON)

/* Looping */
