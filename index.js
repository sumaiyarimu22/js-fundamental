//01. Write a program that prints the numbers from 1 to 100, but for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}

//02. Write a program that takes an array of integers and returns the sum of all the numbers in the array that are greater than 10.

function sumGreaterThenTen(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      result += arr[i];
    }
  }
  return result;
}
console.log(sumGreaterThenTen([40, 30, 20, 45, 2, 3, 4, 5, 6, 16]));

//03. Write a program that takes an array of integers and returns the average of all the numbers in the array.

function averageNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  average = sum / arr.length;
  return average;
}
console.log(averageNumber([40, 30, 20, 45, 2, 3, 4, 5, 6, 16]));

// 04. You are a lumberjack and you have been tasked with cutting down trees in a forest. Each tree has a certain height, and you have been given a height threshold of 10. You can only cut down trees that are taller than the threshold.
// Write a program that takes an array of tree heights and outputs the total height of the trees that you can cut down.

function cutTrees(heights) {
  let totalHeight = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > 10) {
      totalHeight += heights[i];
    }
  }
  return totalHeight;
}

const treeHeights = [5, 12, 7, 15, 8, 9, 11];
const cutDownHeight = cutTrees(treeHeights);
console.log(cutDownHeight);
