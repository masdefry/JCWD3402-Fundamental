// > FUNCTION
// Wadah digunakan untuk menampung baris code.
// Supaya code reusable (digunakan berulang-ulang)

// Step-01: Build
// Step-02: Call

// 1. Declarative Function
function greeting() {
  console.log('Hello');
}

// 2. Function Expression
const welcomeText = function () {
  console.log('Welcome');
};

// 3. Arrow Function
const greetingText = () => {
  console.log('Hi, User!');
};

greeting();
welcomeText();
greetingText();

function displayString() {
  let string = 'Purwadhika School';

  for (let i = 1; i <= 10; i++) {
    console.log(string);
  }
}

displayString();

// > FUNCTION with PARAM & ARGUMENT
{
  function greeting(str) {
    console.log(str);
  }

  greeting('Hello');
  greeting('Hi');
  greeting('Welcome');

  function displayBiodata(name, hobby = 'Membaca', address = 'Indonesia') {
    console.log(name, hobby, address);
  }

  displayBiodata('Defryan');
}

// > FUNCTION wit REST PARAMETERS
function displayFruits(fruit1, fruit2, ...fruits) {
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruits);
}

displayFruits(
  'Apel',
  'Mangga',
  'Jeruk',
  'Durian',
  'Semangka',
  'Melon'
);

// > FUNCTION with RETURN
function withReturn() {
  return 'Hello';
}

console.log(withReturn());
