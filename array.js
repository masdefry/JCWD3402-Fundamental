// > ARRAY

// Case. 5 data students
// const student1 = 'Defryan'
// const student2 = 'Fo'
// const student3 = 'Raka'
// const student4 = 'Hasbi'
// const student5 = 'Jo'

/*
    const arr = ['', 0, true, false, undefined, null, []]
*/

const students = ['Defryan', 'Fo', 'Raka', 'Hasbi', 'Jo'];
students[0];
students[0] = 'Ryan';
delete students[0];
console.log(students);

// > ARRAY METHODS
// .push    : Menambahkan data di index paling akhir
const fruits = ['Mangga', 'Apel', 'Jeruk'];
fruits.push('Durian');
fruits.push('Pir');
console.log(fruits);

// .unshift : Menambahkan data di index paling awal
const cars = ['Toyota', 'Wuling', 'Daihatsu'];
cars.unshift('BYD'); // [BYD, Toyota, Wuling, Daihatsu]
console.log(cars);

// .shift   : Menghapus data di index paling awal
const numbers = [1, 2, 3, 4, 5];
numbers.shift();
console.log(numbers);

// .pop     : Menghapus data di index paling akhir
const alphabets = ['a', 'b', 'c'];
alphabets.pop();
console.log(alphabets);

// .slice   : Memotong
// .slice(startIndex, endIndex) : endIndex tidak ikut dipotong/diambil
{
  const students = ['Aboy', 'Immanuel', 'Tito'];
  const sliceStudents = students.slice(0, 2);
  console.log(sliceStudents);
}

// .length
{
  const numbers = [1, 2, 3];
  console.log(numbers.length);
}

// .indexOf
{
  const vegetables = ['Sawi', 'Kangkung', 'Tauge'];
  console.log(vegetables.indexOf('Sawi'));
}

// .join    : Konversi array menjadi string
{
  const fullName = ['M', 'Defryan', 'Tridya'];
  console.log(fullName.join('***'));
}

// .splice
// .splice(startIndex, totalItemToDelete, newItem)
{
  const fruits = ['Naga', 'Kelengkeng', 'Jeruk'];
  fruits.splice(0, 2);
  console.log(fruits);

  const drinks = ['Kopi', 'Teh', 'Jus'];
  drinks.splice(1, 1, 'Air');
  console.log(drinks);

  const students = ['Hafiz', 'Yusril', 'Aboy'];
  students.splice(2, 0, 'Hasbi', 'Raka');
  console.log(students);
}

// .split   : Merubah string menjadi array
const fullName = 'M Defryan';

console.log(fullName.split(''));
