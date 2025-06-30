// > CONDITIONAL STATEMENT (PENGKONDISIAN)

// If
/*
    if(condition){
        Block of code
    }
*/
let nilai = 90;
if (nilai > 85) {
  console.log('Nilai Anda ' + nilai + ', Anda dinyatakan Lolos!');
  // String Template Literal (``)
  console.log(`Nilai Anda ${nilai}, Anda dinyatakan Lolos!`);
}

// If else
{
  let nilai = 90;

  if (nilai > 85) {
    console.log(`Nilai Anda ${nilai}, Anda dinyatakan lolos!`);
  } else {
    console.log(`Nilai Anda ${nilai}, Anda dinyatakan Tidak Lolos!`);
  }
}

// If else if else (Nested Condition)
/*
    if(condition){
        Block of code 01
    }else if(condition){
        Block of code 02
    }else if(condition){
        Block of code 03
    }else{
        Block of code 04
    }
*/
/*
    point > 90 ---> A
    point > 85 ---> B
    point > 75 ---> C
    point <= 75 ---> D
*/
let point = 90;

if (point > 90) {
  console.log('A');
} else if (point > 85) {
  console.log('B');
} else if (point > 75) {
  console.log('C');
} else {
  console.log('D');
}

// > TERNARY OPERATOR
// nilai >= 85 ---> Lulus
// nilai < 85  ---> Tidak Lulus
{
  let nilai = 84;

  if (nilai >= 85) {
    console.log('Lulus');
  } else {
    console.log('Tidak Lulus');
  }
  nilai >= 85 ? console.log('Lulus') : console.log('Tidak Lulus');
}

/*
    point > 90 ---> A
    point > 85 ---> B
    point > 75 ---> C
    point <= 75 ---> D
*/
{
  let point = 100;

  point > 90
    ? console.log('A')
    : point > 85
    ? console.log('B')
    : point > 75
    ? console.log('C')
    : console.log('D');

  if (point > 90) console.log('A');
  else if (point > 85) console.log('B');
  else if (point > 75) console.log('C');
  else console.log('D');
}
