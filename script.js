// //variables
// //var
// var myNumber = 100; //declare
// var myNumber = 200; //re-declare
// myNumber = 300; //re-assign
// console.log(myNumber);
// //let
// let friendName = "Tiyara";
// //const
// const temp = 28.56;

// //without any keyword
// test = "error"; //can't create scope
// console.log(test);

// data types
//primitive, non-primitive
//primitive
//number

// const number = 10;
// console.log(typeof 10);

//string
// const libraryName = "react";
// console.log(typeof libraryName);

//boolean
// const isRaining = false;
// console.log(typeof isRaining);

// math oprators(+,-,*,/,%,**)

// const a = 5;
// const b = 4;
// const sum = a + b;
// const diffrence = a - b;
// const division = a / b;
// const product = a * b;
// const mod = a % b;
// const sq = a ** b; //a^b,10^2

// console.log(sum);

//operator precedence
//5+4
//*10
// /3
// const result = ((5 + 4) * 10) / 3;
// console.log(result);

// const a = 10.356;
// const b = 5.456;
// const sum = a + b;
// console.log(Number(sum.toFixed(2)));
// console.log(+sum.toFixed(3));

// const red = "100px";
// console.log(parseInt(red));

// comparison operators(<,>,<=,>=)
// console.log(5 > 6);
// console.log(5 < 6);
// console.log(5 >= 4);
// console.log(5 <= 6);

//assignment operators(==,===,!=,!==)
// console.log(5 == "5"); //only checks value
// console.log(5 === "5"); //checks both value and type
// console.log(5 != "6");
// console.log(5 !== "5");

//type conversion and type coersion
// Type coercion is the automatic or implicit conversion
const myNumber = "10";
// console.log(typeof +myNumber);

//falsy values(null,undefined,false,',0,NaN)
// const myNUm = "";
// if (myNUm) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

//switch case
// const day = "friday";
// switch (day) {
//   case "friday":
//     console.log("has class");
//     break;
//   case "saturday":
//     console.log("no class");
//     break;
//   default:
//     console.log("nothing");
// }

// for loop, while loop,do while
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i); //event
//   } else {
//     console.log("odd");
//   }
// }

//break
// for (let i = 0; i <= 100; i++) {
//   if (i === 50) {
//     break;
//   }
//   console.log(i);
// }

//continue
// for (let i = 0; i <= 100; i++) {
//   if (i % 5 === 0) {
//     continue;
//   }
//   console.log(i);
// }

//while loop
// const arr = [10, 29, 28, 23, 4, 5, 6, 56];
// let sum = 0;

// let i = 0;
// while (i <= arr.length - 1) {
//   sum += arr[i];

//   i++;
// }
// console.log(sum);

//do...while
// const arr = [10, 29, 28, 23, 4, 5, 6, 56];
// let sum = 0;
// let i = 0;
// do {
//   sum += arr[i];
//   i++;
// } while (i <= arr.length - 1);
// console.log(sum);

//arrays
const arr = [1, 2, 3, 4, 5];
// console.log(arr.length);
// console.log(arr[2]);
// console.log(arr.at(-1));
// //last el
// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));

// console.log(arr.indexOf(0));
// console.log(arr.includes(5));

//objects
const students = {
  name: "shohan",
  roll: 135,
};
console.log(students.roll);
console.log(students["roll"]);
