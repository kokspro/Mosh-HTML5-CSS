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
let priceRange = [
    {label: '$', tooltip: 'Inexpesive', minPrice: 1, maxPrice: 49},
    {label: '$$', tooltip: 'Moderate', minPrice: 50, maxPrice: 99},
    {label: '$$$', tooltip: 'Expensive', minPrice: 100, maxPrice: 200}
];
