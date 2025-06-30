// > LOOPING
// ex.
let greeting = 'Purwadhika School';
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);

// 3 Syarat:
// Start
// Condition
// Exit Way

// 3 Jenis Looping:
// While
/*
    Start
    while(condition){
        Block of code 
        Exit Way
    }
*/
// let start = 1;

// while (start <= 10) {
//   // 1 <= 10? TRUE; 1 <= 10? TRUE; 1 <= 10? TRUE;
//   console.log(greeting); // 1x; 2x; 3x
// }

let counter = 1; //  1 ---> 3

while (counter < 3) {
  // 1 < 3? TRUE; 3 < 3? FALSE;
  console.log(counter); // 1x
  counter += 2;
}

// Do While
/*
    Start
    do{
        Block of code 
        Exit way
    }(condition)
*/

let start = 1;

do {
  console.log(greeting);
  start++;
} while (start <= 10);

{
  let start = 10; // start = 20;
  do {
    console.log(greeting); // 1x
    start+= 10; //  
  } while (start < 10); // 20 < 10? FALSE



  let counter = 10;
  while(counter < 10){ // 10 < 10? FALSE
    console.log(greeting);
    counter += 10;
  }
}

// For Loop
/*
    for(start; condition; exitWay){
        Block of code
    }
*/
for(let i=1; i <= 10; i++){
    console.log(greeting);
}