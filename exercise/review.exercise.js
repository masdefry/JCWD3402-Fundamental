// > FETCH
// Function digunakan untuk meng-handle request menuju ke API/server
// Promise > asynchronous

// async function HandleGetProducts() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Promise: resolve/reject
//     const posts = await response.json();
//     console.log(posts);
//   } catch (error) {
//     console.log(error);
//   }
// }

// HandleGetProducts();

// > PATTERN
function CreatePattern(n) {
  let output = '';

  for (let i = n; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      output += '*';
    }
    output += '\n';
  }

  console.log(output);
}

CreatePattern(3);

// > SUM DUPLICATE NUMBERS
function SumDuplicateNumbers(arrOfNumbers) {
  arrOfNumbers.sort((a, b) => a - b);

  let totalDuplicate = 0;
  arrOfNumbers.forEach((item, index) => {
    if (item === arrOfNumbers[index - 1] || item === arrOfNumbers[index + 1])
      totalDuplicate += item;
  });

  console.log(totalDuplicate);
}

SumDuplicateNumbers([100, 10, 20, 30, 10, 100, 5, 25, 35]);
