// > LOGICAL OPERATOR
// Membandingkan lebih dari 1 kondisi
// OR ||
// Menghasilkan nilai akhir berupa true, ketika salah 1 kondisi ada yg bernilai true
// Menghasilkan nilai akhir berupa false, ketika seluruh kondisi bernilai false
console.log(3 >= 3 || 1 < 1); // TRUE || FALSE ---> TRUE;
console.log(3 === '3' || 3 !== '3'); // FALSE || TRUE ---> TRUE;

// AND &&
// Menghasilkan nilai akhir berupa false, ketika salah 1 kondisi bernilai false
// Menghasilkan nilai akhir berupa true, ketika seluruh kondisi bernilai true
console.log(3 >= 3 && 1 < 1); // TRUE && FALSE ---> FALSE
console.log(1 === '1' && 3 != '3'); // FALSE && FALSE ---> FALSE 

// NOT !
console.log(!(3 > 3)) // !FALSE ---> TRUE