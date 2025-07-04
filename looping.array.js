// > LOOPING ARRAY
const campusPurwadhika = ['BSD', 'JKT', 'BDG', 'SBY', 'JGY'];
// console.log(campusPurwadhika[0]);
// console.log(campusPurwadhika[1]);
// console.log(campusPurwadhika[2]);
// console.log(campusPurwadhika[3]);

// // Cara-01
// for (let i = 0; i < campusPurwadhika.length; i++) {
//   console.log(campusPurwadhika[i]);
// }

// // Cara-02
// for (let value of campusPurwadhika) {
//   console.log(value);
// }

// > LOOPING SPECIAL METHODS
const programsPurwadhika = [
  'Digital Marketing',
  'Web Development',
  'Data Science',
  'Visual Design',
];
// .forEach : Melakukan looping saja
programsPurwadhika.forEach((item, index) => {
  console.log(item);
  console.log(index);
});

// .map : Menghasilkan array baru
const mapProgramsPurwadhika = programsPurwadhika.map((item, index) => {
  return `New Program: ${item}`;
});
console.log(mapProgramsPurwadhika);

// .filter  : Memfilter
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((item, index) => {
  return item % 2 === 0;
});
console.log(evenNumbers);
