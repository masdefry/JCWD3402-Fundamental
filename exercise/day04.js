let pattern = '';
// *
// * *
// * * *
//

for (let i = 1; i <= 3; i++) {
  // i=4
  for (let j = 1; j <= i; j++) {
    // 3x
    pattern += '*';
  }
  pattern += '\n';
}

console.log(pattern);

function splitStringIntoArrays(text) {
  let tempItem = ''; // World
  let outputArrays = [];
  for (let item of text) {
    if (item !== ' ') {
      tempItem += item;
    } else if (item === ' ') {
      outputArrays.push(tempItem);
      tempItem = '';
    }
  }

  if (tempItem !== '') outputArrays.push(tempItem);

  return outputArrays;
}

console.log(splitStringIntoArrays('Hello World '));
