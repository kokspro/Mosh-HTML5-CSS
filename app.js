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