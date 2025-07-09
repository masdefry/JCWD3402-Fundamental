// > CALLBACK FUNCTION

// Cara-01
function Calculator(a, b) {
  return a + b;
}

function Displayer(result) {
  console.log(result);
}

let resultCalculator = Calculator(3, 1); // 4
Displayer(resultCalculator);

// Cara-02
function Calculator(a, b) {
  let result = a + b;

  Displayer(result);
}

function Displayer(result) {
  console.log(result);
}

Calculator(3, 3);

// Cara-03 (CB FUNCTION)
// - Indirect CB
function Calculator(a, b, cb) {
  return cb(a + b); // Displayer(3 + 3)
}

function Displayer(result) {
  console.log(result);
}

Calculator(3, 3, Displayer);

// - Direct CB
function Calculator(a, b, cb) {
  return cb(a + b); // Displayer(3 + 3)
}

Calculator(3, 3, function (result) {
  console.log(result);
});

