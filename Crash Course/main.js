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
    statusCompleted: false
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
    statusCompleted: false
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

// For loop:
for (let i = 0; i <= 5; i++) {
  console.log(`${fname} - ${i}\n`);
};

for (let i = 0; i < things_to_do.length; i++) {
  console.log(`For loop - ${things_to_do[i].work} \n`);
};

// For of loop:
for (let single_item of things_to_do) {
  console.log(single_item)
}

// While loop:
let i = 0;
while (i < 5) {
  console.log(`${lname} - ${i} `)
  i += 1
};

/* High Order Array Method -  It is the highly suggested method for iteration over arrays */

// forEach
things_to_do.forEach(function (x) {
  console.log(x.id);
});

// map ---> returns an array = used to get values.
things_to_do_Ids = things_to_do.map(function (x) {
  return (x.work);
});
console.log(things_to_do_Ids)

// filter ---> returns an array that is filtered based on a given condition = used to get values.
things_to_do_Completed = things_to_do.filter(function (x) {
  return x.statusCompleted === true;
});
console.log(things_to_do_Completed)

// chaining is possible for desired --> only returns completed work.
things_to_do_Completed_work = things_to_do.filter(function (x) {
  return x.statusCompleted === true;
}).map(function (x) {
  return x.work;
});
console.log(things_to_do_Completed_work)



/* Conditionals 

'==' only checks value
'===' check datatypes as well
*/

const x = '10';
if (x == 10) {
  console.log(`${x} is equal to int 10 as == doesn't check for datatype\n`)
}
else if (x === 10) {
  console.log(`${x} is equal to string 10 as '===' checks if the datatype is also similar.`)
}
else {
  console.log('Values are not similar, let alone datatypes.')
}


// Ternary operator ?=if :=else

const x1 = 10;
const color = x1 > 10 ? "red" : "blue";
console.log(color)

// switch

switch (color) {
  case 'red':
    console.log('It\'s Red');
    break;
  default:
    console.log('It\'s not red');
    break
};



/* Functions */

// here also default values can be set as shown below
function multiplyNumbers(num1 = 1, num2 = 1) {
  console.log(num1 + num2);
}
multiplyNumbers(5, 3);
multiplyNumbers()

// function without arrow:
function addNums(num1 = 1, num2 = 2) {
  return num1 + num2;
}
console.log(addNums(12, 1));

// arrow functions of the aboce addNums function is:
const addNums2 = (num1 = 1, num2 = 2) => {
  return num1 + num2;
}
console.log(addNums2(12, 1));

//shorthand of arrow function:
const addNums3 = (nums1 = 1, nums2 = 2) => nums1 + nums2;
console.log(addNums3(2, 4))

const addNums4 = nums1 => nums1 + 5;
console.log(addNums3(2));


/* Object Oriented Programming */

// Constructor fn - the function name should start with capital letter.
function ModeofTransport(name, price, time_taken, next_dept_date) {
  this.name = name;
  this.price = price;
  this.time_taken = time_taken;
  this.next_dept = new Date(next_dept_date)
  // It can have other fn within itself.
  this.day_of_week = function () {
    return this.next_dept.getDay();
  }
};
// Instantiating the object
const bus1 = new ModeofTransport('Volvo', '$56', '3 hrs', '8-17-2020');
console.log(bus1.next_dept, bus1.day_of_week())


// having functions and property together is not a good thing, thus we use a prototype.
function ModeofTransport1(name, price, time_taken, next_dept_date) {
  this.name = name;
  this.price = price;
  this.time_taken = time_taken;
  this.next_dept = new Date(next_dept_date)
  // It can have other fn within itself.
};
ModeofTransport1.prototype.day_of_week = function () {
  return this.next_dept.getDay();
};
// Instantiating the object - fn will be in _proto_
const bus2 = new ModeofTransport1('Volvo', '$56', '3 hrs', '8-17-2020');
console.log(bus2)




/* Classes */
class Person {
  constructor(fname, lname, dob) {
    this.fname = fname;
    this.lname = lname;
    this.dob = new Date(dob);
  };
  getBirthYear() {
    return this.dob.getFullYear();
  };
  getFullName() {
    return `${this.fname} ${this.lname}`;
  };
}

const person11 = new Person("Tom", "Dickens", "9-14-1976")
console.log(person11.getFullName())




/* DOM - Document Object Model */

// It return back the URL of the document.
console.log(document.documentURI);

console.log(document.title);
console.log(document.getElementById("counter-inc-button"));
console.log(window)

//Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1')); // it will select the first h1 tag only
console.log(document.querySelector('.container'));


//Multiple element
document.querySelectorAll('.item'); // return nodelist and array methods can be used on it.

const items = document.querySelectorAll('.items')
items.forEach((item) => console.log(item));




/* Events */
let c = Number(document.querySelector('#counter-label').textContent);
console.log(c)
const inc_button = document.querySelector('.positive-button')
inc_button.addEventListener('click', (e) => {
  c += 1
  document.querySelector('#counter-label').innerHTML = c
  console.log(c)
});
const res_button = document.querySelector('.negative-button')
res_button.addEventListener('click', (e) => {
  c = 0
  document.querySelector('#counter-label').innerHTML = c
  console.log(c)
});
// ps: search for preventDefault and log(e) where e is the event parameter.


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
