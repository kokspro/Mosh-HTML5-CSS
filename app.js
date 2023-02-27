// let message = "Welcome to the party";

// console.log(message);

// function big( a, b ) {
//     return ( a > b ) ? a : b;
// }

// function isLandscape( width, height ) {
//     return (width > height);
// }

// if divisible by 3 => Fizz
// if divisible by 5 => Buzz
// if divisible by 3 and 5 => FizzBuzz
// if neither return input
// if not a number input return 'Not a Number'
// function fizzBuzz(input) {
//     if ( isNaN(input) ) {
//         return 'Not a number';
//     } else {
//         if ( (input % 3) === 0 && (input % 5) === 0) {
//             return 'FizzBuzz';
//         }
//         if ( (input % 3) === 0) {
//             return 'Fizz';
//         }
//         if ( (input % 5) === 0) {
//             return 'Buzz';
//         }
//         return input;  
//     }
// }



// Speed limit = 70
// 5 -> 1 point
//Math.floor(1.4)
// 12 points -> license susptended
// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const mphPerPoint = 5;
//     if ( speed < (speedLimit + mphPerPoint) ) {
//         return 'Ok';
//     } else {
//         const points = Math.floor((speed - speedLimit) / mphPerPoint);
//         if ( points < 12 ) {
//             return 'Points: ' + points;
//         } else {
//             return 'License suspended';
//         }
//     }
// }


//Display numbers up to given limit and whether they are even or odd
// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {
//         if ( i % 2 === 0 ) {
//             console.log(i + ' Even');
//         } else {
//             console.log(i + ' Odd');
//         }
//     }
// }



//Count truthy elements in an array
// let arrays = [1, 2, 3, 'Carrie', undefined, null, NaN];
// function countTruthy(array) {
//     let truthy = 0;
//     for (let things of arrays)
//         if (things)
//             truthy++;
//     return truthy;
// }




//show strings only
// const movie = {
//     title: 'a',
//     teleaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// function showProperties(obj) {
//     for (let strings in obj) {
//         if (typeof obj[strings] === 'string') {
//             console.log(strings, obj[strings]);
//         }
//     }
// }


//function returns sum of all multiples of 3 and 5 in limit
// function sum(limit) {
//     let sum = 0;
//     for (let i = 0; i <= limit; i++)
//         if (i % 3 === 0 || i % 5 ===0) 
//             sum +=i;

//     return sum;
// }



//average array in marks
//return grade
//1-59 F
//60-69 D
//70-79 C
//80-89 B
//90-100 A
// let marks = [80, 90, 100, 100, 100, 95, 90]
// function calculateGrade(marks) {
//     let totalMarks = 0;
//     for (let grades of marks)
//         totalMarks += grades;
//     let avg = totalMarks / marks.length;
//     if (avg <= 59)
//         return 'F';
//     if (avg <= 69)
//         return 'D';
//     if (avg <= 79)
//         return 'C';
//     if (avg <= 89)
//         return 'B';
//     return 'A';                
// }



//rows has = number of stars to its number
// function showStars(rows) {
//     let message = '';
//     for (let i = 0; i < rows; i++) {
//         message += '*';
//         console.log(message);
//     }
// }



//shows all prime numbers up to and including limit
// function showPrimes(limit) {
//     for (let number = 2; number < limit; number++) {
//         let prime = true;
//         for ( let factor = 2; factor < number; factor++) {
//             if (number % factor === 0) {
//                 prime = false;
//                 break;
//             } 
//         }
//         if (prime) {
//             console.log(number);
//         }
//     }  
// }
//split last function into mini functions

// function showPrimes(limit) {
//     for ( let number = 2; number <= limit; number++) 
//         if (isPrime(number)) 
//             console.log(number);
// }

// function isPrime(number) {
//         for ( let factor = 2; factor < number; factor++) 
//             if (number % factor === 0) 
//                 return false;
//         return true;
// }

// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++)
//         if (isPrime(number)) console.log(number);
// }

// function isPrime(number) {
//     for (let factor = 2; factor < number; factor++)
//         if (number % factor === 0)
//             return false;
//     return true;        
// }

// copy one object properties to another
// const another = Object.assign({}, circle);


//street city zipcode
// display all properties of object with value
// const address = {
//     street: 2414,
//     city: 'Missouri City',
//     zipCode: 77459
// };
// function showAddress(obj) {
//     for ( let items in obj ) {
//         console.log(items, obj[items]);
//     }
// }



//Write a Factory and blank function to initialize an address
// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     };
// }
// function Address(street, city, zipCode) {
//     this.street = street,
//     this.city = city,
//     this.zipCode = zipCode
// }
// const thirdHouse = new Address(4441, 'Bellaire', 77401);
// const momsHouse = new Address(4441, 'Bellaire', 77401);
// const myHouse = new Address(2414, 'Missiouri', 77459);
// console.log(myHouse);

//use constructor we made to create 2 addresses
//we pass 2 the two addresses to see if they're equal

// function areEqual(address1, address2) {
//     return (address1.street === address2.street 
//         && address1.city === address2.city 
//         && address1.zipCode === address2.zipCode)     
// }
//we pass the 2 to see if they're the same object

// function areSame(address1, address2) {
//     return address1 === address2;
// }


// just make and initialize an object
//title
//body
//author
//views
//comments
//  comments (author, body)
// isLive 

// let post = {
//     title: 'This post',
//     body: 'Lorem ipsum',
//     author: 'Chris',
//     views: 5402,
//     comments: [
//         {author: 'a', body: 'b'},
//         {author: 'c', body: 'd'},
//         {author: 'e', body: 'f'}
//     ],
//     isLive: true
// }


//constructor function that could be a post?
// function Post(title, body, author) {
//     this.title = title,
//     this.body = body,
//     this.author = author,
//     this.views = 0,
//     this.comments = [],
//     this.isLive = false
// }
// let post = new Post('Worth it?', 'So far its so good', 'William');
// console.log(post);



//create 3 price range objects
// let priceRange = [
//     {label: '$', tooltip: 'Inexpesive', minPrice: 1, maxPrice: 49},
//     {label: '$$', tooltip: 'Moderate', minPrice: 50, maxPrice: 99},
//     {label: '$$$', tooltip: 'Expensive', minPrice: 100, maxPrice: 200}
// ];


//Log all numbers in the range
// const numbers = arrayFromRange(-4, 10);
// console.log(numbers);
// function arrayFromRange(min, max) {
//     const array = [];
//     for (let i = min; i <= max; i++) 
//         array.push(i);
//     return array;
// }


// creates a function that does what includes() does
// const numbers = [1, 2, 3, 4];
// console.log(includes(numbers, 1));
// function includes(array, searchElement) {
//     for ( let number of array ) 
//         if (number === searchElement)
//             return true;
//         return false;    
// }


//create a function that takes 2 arrays and excludes second array from first
// const numbers = [1, 2, 3, 4];
// const output = except(numbers, [1, 2]);
// console.log(output);

// function except(array, excluded) {
//     const output = [];
//     for (let element of array) {
//         if (!excluded.includes(element)) {
//             output.push(element);
//         }
//     }
//     return output;
// }

//create a function that moves items in an array by given offset
// const numbers = [1, 2, 3, 4];
// const output = move(numbers, 1, 1);
// console.log(output);
// function move(array, index, offset) {
//     const position = index + offset;
//     if (position >= array.length || position < 0) {
//         console.error('Invalid Offset');
//         return;
//     }
//     const output = [...array];
//     const element = output.splice(index, 1)[0];
//     console.log(element);
//     output.splice(position + offset, 0, element);
//     return output;
// }

//create a function that takes an array and finds out how many times something is in it
//next use it with reduce method
// const numbers = [1, 2, 3, 4, 1, 1, 1];
// const count = countOccurences(numbers, 1);
// console.log(count);
// function countOccurences(array, searchElement) {
//     let count = 0;
//     for (let included of array) 
//         if (included === searchElement) 
//             count += 1;
//     return counts;
// }
// function countOccurences(array, searchElement) {
//     return array.reduce((accumulator, current) => {
//         let occurance = current === searchElement ? 1 : 0;
//         console.log(accumulator, current, searchElement);
//         return (accumulator + occurance);
//     }, 0);
// }


//create function to get largest item from array
//use reduce after its working
// const numbers = [1, 2, 3, 4, 5];
// const max = getMax(numbers);
// console.log(max);
// function getMax(array) {
//     if (array.length === 0) return undefined;
    // let max = array[0];
    // for (let number of array) 
    //     if (number > max) 
    //         max = number;
    // return max;
    //now using REDUCE
    // array.reduce((accumulator, current) => {
        // if (current > accumulator) 
        //     return current;
        // return accumulator;
        // return (current > accumulator) ? current : accumulator;
    // });
//     return array.reduce((a, b) => (a > b) ? a : b );
// }

//IMPORTANT REREAD AND REDO THIS ITS A LOT
//get all movies in 2018 with rating > 4
//sort by rating in descending order
//only display title of the movie
//result should be 'b' 'a' in console
// const movies = [
//     { title: 'a', year: 2018, rating: 4.5},
//     { title: 'b', year: 2018, rating: 4.9},
//     { title: 'c', year: 2018, rating: 4.7},
//     { title: 'd', year: 2017, rating: 4.5}
// ];
// const titles = movies
//     .filter(m => m.year === 2018 && m.rating >= 4)
//     .sort((a, b) => a.rating - b.rating)
//     .reverse()
//     .map(m => m.title);

// console.log(titles);  


// REDOING IT ALL
// const numbers = arrayFromRange(-10, 27);
// function arrayFromRange(min, max) {
//     const output = [];
//     for (let i = min; i <= max; i++)
//         output.push(i);
//     console.log(output);
// }

// const numbers = [1, 2, 3, 4];
// function includes(array, searchElement) {
//     for (let element of array) 
//         if (element === searchElement)
//             return true;
//     return false;
// }

// const numbers = [1, 2, 3, 4];
// const output = except(numbers, [1, 2]);
// console.log(output);
// function except(array, excluded) {
//     let output = [];
//     for ( let element of array) 
//         if (!excluded.includes(element)) 
//             output.push(element);
//      return output;   
// }

// const numbers = [1, 2, 3, 4];
// const output = move(numbers, 1, 1);
// console.log(output);
// function move(array, index, offset) {
//     const output = [...array];
//     const element = output.splice(index, 1)[0];
//     output.splice(index + offset, 0, element);
//     return output;
// }

// const numbers = [1, 2, 3, 4, 1, 1, 1];
// const count = countOccurances(numbers, 1);
// console.log(count);
// function countOccurances(array, searchElement) {
//     let count = 0;
//     for (let element of array) 
//         if (element === searchElement)
//             count += 1;
//     return count;
// }
// function countOccurances(array, searchElement) {
//     return array.reduce((accumulator, current) => {
//         const occurs = (current === searchElement) ? 1 : 0;
//         return accumulator + occurs;
//     }, 0);
// }

// const numbers = [1, 2, 3, 4, 7];
// const max = getMax(numbers);
// console.log(max);
// function getMax(array) {
    // let max = array[0];
    // for (let element of array) 
    //     if (element > max) 
    //         max = element;
    // return max;
    // return array.reduce((accumulator, current) => {
        // if (current > accumulator) 
        //     accumulator = current;
        // return accumulator;
//         return (current > accumulator) ? current : accumulator;
//     });
// }

// const movies = [
//     { title: 'a', year: 2018, rating: 4.5},
//     { title: 'b', year: 2018, rating: 4.7},
//     { title: 'c', year: 2018, rating: 3},
//     { title: 'd', year: 2017, rating: 4.5}
// ];
// const movieRating = movies
//     .filter(m => m.year === 2018 && m.rating >= 4)
//     .sort((a, b) => a.rating - b.rating)
//     .reverse()
//     .map(m => m.title);
// console.log(movieRating);   


//create function that takes arguments and returns sum
//then modify to accept an array then return the same result
// function sum(...items) {
//     if (items.length === 1 && Array.isArray(items[0]))
//        items = [...items[0]]; 
//     return items.reduce((a, b) => a + b);
// }


//create circle object
//make area read only
// const circle = {
//     radius: 2,
//     get area() {
//         return Math.PI * Math.pow(this.radius, 2);
//     } 
// }


//if first arg is not array, throw exception and log on console


// try {
//     const numbers = [1, 2, 3, 4];
//     const count = countOccurances(numbers, 1);
//     console.log(count);
// }
// catch (e) {
//     console.log(e.message);
// }


// function countOccurances(array, searchElement) {
//     if (!Array.isArray(array)) {
//         throw new Error('Invalid Array');
//     }
//     return array.reduce((accumulator, current) => {
//         const occurance = (current === searchElement) ? 1 : 0;
//         return accumulator + occurance;
//     }, 0);
// }


// **************************************************************SECTION NOW ON ADVANCED JAVASCRIPT COURSE*****************************************************
// **************************************************************SECTION NOW ON ADVANCED JAVASCRIPT COURSE*****************************************************
// **************************************************************SECTION NOW ON ADVANCED JAVASCRIPT COURSE*****************************************************
// **************************************************************SECTION NOW ON ADVANCED JAVASCRIPT COURSE*****************************************************
// **************************************************************SECTION NOW ON ADVANCED JAVASCRIPT COURSE*****************************************************
// **************************************************************SECTION NOW ON ADVANCED JAVASCRIPT COURSE*****************************************************
// **************************************************************SECTION NOW ON ADVANCED JAVASCRIPT COURSE*****************************************************
// **************************************************************SECTION NOW ON ADVANCED JAVASCRIPT COURSE*****************************************************
// **************************************************************SECTION NOW ON ADVANCED JAVASCRIPT COURSE*****************************************************
// **************************************************************SECTION NOW ON ADVANCED JAVASCRIPT COURSE*****************************************************
// **************************************************************SECTION NOW ON ADVANCED JAVASCRIPT COURSE*****************************************************
// **************************************************************SECTION NOW ON ADVANCED JAVASCRIPT COURSE*****************************************************
// **************************************************************SECTION NOW ON ADVANCED JAVASCRIPT COURSE*****************************************************
// **************************************************************SECTION NOW ON ADVANCED JAVASCRIPT COURSE*****************************************************

// Object Literal Syntax
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');
//     }
// };
//draw is a method
//radius and location are properties
//use dot notation


//Factory Function

// function createCircle(radius) {
//     return {
//         radius: radius,     // can just be radius, if parameter is same name
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);
// circle.draw();

//Constructor Function

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);
// new operator creates an empty object, then it sets this to point to object, returns object from function


//Reference of objects and primitives
// let x = 10;
// let y = x;

// x = 20;

// console.log(x, y);

// let x = { value: 10};
// let y = x;

// x.value = 20;

// console.log(x, y);

// let number = 10;
// function increase (number) {
//     number++; 
// }

// increase(number);
// console.log(number);

// let obj = {value: 10};
// function increase (obj) {
//     obj.value++; 
// }

// increase(obj);
// console.log(obj);

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// const circle = new Circle(10);
// console.log(circle);
// circle.diameter = circle.radius * 2;
// console.log(circle);
// circle.location = { x: 1};    //last two comments are the same
// circle['location'] = { x: 1}; //You would use bracket when things are at runtime
//For instance you don't know what the property is called yet, or if there
//are special characters, for instance location-center

// delete circle.location;

//for in loop
//for in loop is best for iterating over properties in an object
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// for (let key in circle) {
//     console.log(key);
//     console.log(key, circle[key]);
//     console.log(circle[key]);
// }

//Method approach to get all the keys in an object, returns all keys as an array
// const keys = Object.keys(circle);
// console.log(keys);

//to check if a certain property or method is in an object
// if ('radius' in circle)
//     console.log('Circle has a radius');

//Abstraction
//You can set things you don't want to be accessible from the outside
//as a local variable, see second version
// function Circle(radius) {
//     this.radius = radius;
//     this.defaultLocation = { x: 0, y: 0};
//     this.computeOptimumLocation = function(factor) {
//         //  ....
//     };
//     this.draw = function() {
//         this.computeOptimumLocation();
//         console.log('draw');
//     }
// }
// const circle = new Circle(10);


// function Circle2(radius) {
//     this.radius = radius;
//     let defaultLocation = { x: 0, y: 0};
//     let computeOptimumLocation = function(factor) {
//         //  ....
//     };
//     this.draw = function() {
//         computeOptimumLocation(0.1);
//         console.log('draw');
//     }
// }
// const circle2 = new Circle(10);

// IMPORTANTTTTT  Use Object.defineProperty to define getters or setters
// function Circle(radius) {
//     this.radius = radius;
//     let defaultLocation = { x: 0, y: 0};
//     this.getDefaultLocation = function() {
//         return defaultLocation;
//     };

//     this.draw = function() {
//         console.log('draw');
//     }
//     Object.defineProperty(this, 'defaultLocation', {
//         get: function() {
//             return defaultLocation;
//         },
//         set: function(value) {
//             if (!value.x || !value.y)
//                 throw new Error('Invalid Location');
//             defaultLocation = value;
//         }
//     });
// }
// const circle = new Circle(10);
// circle.draw();
// console.log(circle);


//*********************** */
//*********************** */
//*********************** */
//*********************** STOPWATCH EXERCISE*/
//*********************** */
//*********************** */
//*********************** */
// function Stopwatch() {
//     let startTime, endTime, running, duration = 0;
//     this.start = function() {
//         if (running)
//             throw new Error('Stopwatch is already running!');
//         startTime = Date.now();
//         running = true;
//     };
//     this.stop = function() {
//         if (!running)
//             throw new Error('Stopwatch is already stopped!');
//         endTime = Date.now(); 
//         running = false;
//         duration += (endTime - startTime)/1000;
//     };
//     this.reset = function() {
//         startTime, endTime, running, duration = 0;
//     };
//     Object.defineProperty(this, 'duration', {
//         get: function() { return duration; }
//     });
// }
// const sw = new Stopwatch();


//****************PROTOTYPES******************* */

// function Circle(radius) {
//     // Instance members
//     this.radius = radius;
//     this.move = function() {
//         this.draw();
//         console.log('move');
//     }
// }

// Circle.prototype.draw = function() {
//     //Prototype members
//     console.log('draw');
// }
// Circle.prototype.toString = function() {
//     return 'Circle with radius ' + this.radius;
// }

// const c1 = new Circle(1);
// const c2 = new Circle(2);

//for in loop returns all members, instance/own and prototype

//Exercise take stopwatch, and move all methods to the prototype
//Turns out it was a bad idea and was not necessary


//Inheriting from your own prototypes

// function Shape() {
   
// }

// Shape.prototype.duplicate = function() {
//     console.log('duplicate');
// }

// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);   //important new part

// Circle.prototype.draw = function() {
//     console.log('draw');
// }

// const s = new Shape();
// const c = new Circle(1);

//problem with the above, this should fix

// function Shape() {
   
// }

// Shape.prototype.duplicate = function() {
//     console.log('duplicate');
// }

// function Circle(radius) {
//     this.radius = radius;
// }
// //This resets the prototype of the circle, making it from shape constructor
// Circle.prototype = Object.create(Shape.prototype);   //important new part
// Circle.prototype.constructor = Circle;  //Should always reset constructor when you reset prototype

// Circle.prototype.draw = function() {
//     console.log('draw');
// }

// const s = new Shape();
// const c = new Circle(1);

//Super constructor
// function Shape(color) {
//    this.color = color;
// }

// Shape.prototype.duplicate = function() {
//     console.log('duplicate');
// }

// function Circle(radius, color) {
//     Shape.call(this, color); //This is how you call the super constructor to pull params
//     this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);   
// Circle.prototype.constructor = Circle;  

// Circle.prototype.draw = function() {
//     console.log('draw');
// }

// const s = new Shape();
// const c = new Circle(1, 'blue');

//Intermediate Function Inheritence
// function Shape(color) {
//     this.color = color;
//  }
//  Shape.prototype.duplicate = function() {
//      console.log('duplicate');
//  }
//  function extend(Child, Parent) { //Uppercase params because they're supposed to be constructor functions
//     Child.prototype = Object.create(Parent.prototype);   //Refactored to not repeat per object
//     Child.prototype.constructor = Child;
//  } 
//  function Circle(radius, color) {
//     Shape.call(this, color);
//     this.radius = radius;
//  }
//  extend(Circle, Shape);
//  Circle.prototype.draw = function() {
//      console.log('draw');
//  }
//  function Square(size) {
//     this.size = size;
//  }
//  extend(Square, Shape);
//  const s = new Shape();
//  const c = new Circle(1, 'blue');

//Method Overriding
// function extend(Child, Parent) { 
//     Child.prototype = Object.create(Parent.prototype);   
//     Child.prototype.constructor = Child;
// } 
// function Shape() {

// }
// Shape.prototype.duplicate = function() {
//     console.log('duplicate');
// }
// function Circle() {

// }
// extend(Circle, Shape);

// Circle.prototype.duplicate = function() { //This is the part that overrides the shape.duplicate
//     Shape.prototype.duplicate.call(this); //Run like a normal function, but .call method for parent access
//     console.log('duplicate circle');  //Its like Cascading in CSS
// }

// const c = new Circle();


//Polymorphism
//Amazing, just amazing
// function extend(Child, Parent) { 
//     Child.prototype = Object.create(Parent.prototype);   
//     Child.prototype.constructor = Child;
// } 
// function Shape() {

// }
// Shape.prototype.duplicate = function() {
//     console.log('duplicate');
// }
// function Circle() {

// }
// extend(Circle, Shape);

// Circle.prototype.duplicate = function() { 
//     console.log('duplicate circle');  
// }

// function Square() {

// }
// extend(Square, Shape);
// Square.prototype.duplicate = function() { 
//     console.log('duplicate square');  
// }

// const shapes = [
//     new Circle(),
//     new Square()
// ];

// for(let shape of shapes) {
//     shape.duplicate();
// }

//Mixins JavaScript Style

// function mixin(target, ...sources) {      //... here is rest operator
//     Object.assign(target, ...sources);      //... here is the spread operator 
// }

// const canEat = {
//     eat: function() {
//         this.hunger--;
//         console.log('eating');
//     }
// };

// const canWalk = {
//     walk: function() {
//         console.log('walking');
//     }
// };

// const canSwim = {
//     swim: function() {
//         console.log('swimming');
//     }
// };

// function Person() {
// }
// function Goldfish() {

// }
// mixin(Person.prototype, canEat, canWalk);  //Better way to do whats below
// mixin(Goldfish.prototype, canEat, canSwim);
 
// // Object.assign(Person.prototype, canEat, canWalk);  //Can use to copy properties and methods from one object 
// // Object.assign(Goldfish.prototype, canEat, canSwim);
// const person = new Person(); 
// const fishy = new Goldfish();         
// console.log(person);
// console.log(fishy);

//PROTOTYPICAL  INHERITENCE EXERCISES
//Design 2 objects, one is HtmlElement one is HtmlSelectElement 
//HTMLSEs parent is HtmlElement, it represents a dropdown menu
//Htmle has one method, click, prototype has another method focus
//1 own method, one prototype method
//e.click logs clicked, e.focus logs focused
//htmlse optionally passes an array of items, or makes empty array items:
//additem method and remove item method. addItem adds an item to items array
//removeitem method removes item from items array
//htmlse inherits click from htmle and focus from htmle prototype
//do not use extend

// function HtmlElement() {
//     this.click = function() {
//         console.log('clicked');
//     }
// }
// HtmlElement.prototype.focus = function() {
//     console.log('focused');
// }
// const e = new HtmlElement();
// function HtmlSelectElement(...array) {
//     this.items = array || [];
//     this.addItem = function(number) {
//         this.items.push(number);
//         this.items.sort((a, b) => a - b);
//     };
//     this.removeItem = function(number) {
//         if (this.items.includes(number)) {
//             let spot = this.items.indexOf(number);
//             this.items.splice(spot, 1);
//             // this.items.splice(this.items.indexOf(number), 1);   This would be better
//         } else 
//             return 'This value is not in the array';
//     };
// }
// //This is the right way
// HtmlSelectElement.prototype = new HtmlElement(); //still should 
// //This was why mine wasn't working
// // HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
// // HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// const s = new HtmlSelectElement(1, 2, 3);

//Polymorphism Exercise
// function HtmlImageElemen(src) {
//     this.src = src;
//     this.render = function() {
//         return `<img src="${this.src}"`;
//     }
// }


//***************************************************CLASSSSSSSSSEEEEESSSSSS */
//***************************************************CLASSSSSSSSSEEEEESSSSSS */
//***************************************************CLASSSSSSSSSEEEEESSSSSS */
//***************************************************CLASSSSSSSSSEEEEESSSSSS */
//***************************************************CLASSSSSSSSSEEEEESSSSSS */
//***************************************************CLASSSSSSSSSEEEEESSSSSS */
//***************************************************CLASSSSSSSSSEEEEESSSSSS */
//***************************************************CLASSSSSSSSSEEEEESSSSSS */
//***************************************************CLASSSSSSSSSEEEEESSSSSS */
//***************************************************CLASSSSSSSSSEEEEESSSSSS */
//***************************************************CLASSSSSSSSSEEEEESSSSSS */
//***************************************************CLASSSSSSSSSEEEEESSSSSS */
//***************************************************CLASSSSSSSSSEEEEESSSSSS */

//constructor way
// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function() {
//         console.log('draw');
//     }
// }

//class way
//constructor goes in the body with properties

// class Circle {    //typeof Circle would be a function not an object
//     constructor(radius) {
//         this.radius = radius;
//         this.move = function() {   //Defining the method here will put the method on the object instance
//             console.log('moved');
//         }
//     }
//     draw() {     //All methods in the body end up in the prototype of the object
//         console.log('draw');
//     }
// }

// const c = new Circle(1);

//Hoisting
//function declaration - these are hoisted (can call it before its shown)
// function sayHello() {

// }
// //function expression - these are not hoisted, must be called after
// const sayGoodbye = function() {};

// //classes can be defined both ways - but neither are hoisted
// //always use declaration, simpler and cleaner
// //class declaration
// class Circle {
// }
// //class expression
// const Square = class {
// };

//Static Methods and instance methods
// class Circle {
//     construction(radius) {
//         this.radius = radius;
//     }
//     //instance method - available on the instance of a class, which is an object
//     draw() {
//         console.log('draw');
//     }
//     //static Method
//     static parse(str) {
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius);
//     }
// }
// // const circle = new Circle(1);
// const circle = Circle.parse('{ "radius": 1 }');
// console.log(circle);
//static methods are available on the class itself, not the object instance
//usually used to utility functions not given to a specific object

//TRYING AGAIN WITHOUT COMMENTS *************************
//TRYING AGAIN WITHOUT COMMENTS *************************
//TRYING AGAIN WITHOUT COMMENTS *************************
//TRYING AGAIN WITHOUT COMMENTS *************************
//*************************Find out when you would want to use this? */
// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
//     draw() {
//     }
//     static parse(str) {
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius);
//     }
// }
// const circle = Circle.parse('{"radius":1}');
// console.log(circle);

//The THIS Keyword in JavaScript
//  'use strict'; //--- Enables strict mode, helps with some errors, prevents modifying global object
// const Circle = function() {
//     this.draw = function() {
//         console.log(this);
//     }
// }
// const c= new Circle();
// //Method Call
// c.draw();

// const draw = c.draw;
// console.log(draw);

//Function Call - by default this will point to the global object
// draw();

// class Circle {  //By default, body of classes are executed in strict mode, classes are so cool
//     draw() {
//         console.log(this);
//     }
// }

// const c = new Circle();
// const draw = c.draw;
// draw();

//Private Members Using Symbols

// new primative type called symbol

// const _radius = Symbol();
// const _draw = Symbol();
// class Circle {
//     constructor(radius) {
//         // this.radius = radius;
//         // this['radius'] = radius; //these two are the same
//         this[_radius] = radius; //private property
//     }
//     [_draw]() {
//     }
// }
// const c = new Circle(1);
// c.radius = 4; //This is public, and can be changed
//You cannot directly alter Symbol from outside, it is a unique value
//Sumbol() === Symbol() is false

//Private Members Using WeakMaps

// const _radius = new WeakMap();  //keys are objects, values can be anything, the keys are weak
// const _move = new WeakMap();
// class Circle {
//     constructor(radius) {
//         _radius.set(this, radius);
//         _move.set(this, () => {
//             console.log('move', this);
//         });
//     }
//     draw() {
//         console.log(_radius.get(this));
//         _move.get(this)();
//         console.log('draw');
//     }
// }
// const c = new Circle(1);

//Getters and Setter
// const _radius = new WeakMap();

// class Circle {
//     constructor(radius) {
//         _radius.set(this, radius);
//     }
//                     //looks like a method, but acts like a property
//     get radius() {   //to implement a getter, change to a property with get in front
//         return _radius.get(this);
//     }
//     set radius(value) {
//         if (value <= 0) throw new Error('Invalid Radius');
//         _radius.set(this, value);
//     }
// }
// const c = new Circle(1);

//Inheritance
//if you want properties, you need a constructor
//if both have a constructor, you need to call the super constructor in
//the child constructor
// class Shape {
//     constructor(color) {
//         this.color = color;
//     }
//     move() {
//         console.log('move');
//     }
// }

// class Circle extends Shape {    //extends Shape is all you have to do to inherit
//     constructor(color, radius) {
//         super(color);
//         this.radius = radius;
//     }
//     draw() {
//         console.log('draw');
//     }
// }

// const c = new Circle('red', 5);

//Method Overriding in Classes

class Shape {
    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    move() {
        console.log('circle move');
    }
}

const c = new Circle();






























