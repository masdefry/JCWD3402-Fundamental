// > METHOD
// Program bawaan dari JS yang disediakan untuk tiap tipe data. Fungsinya untuk mempermudah dalam melakukan manipulasi

// 1. String Build in Method
// .length  : Untuk menghitung jumlah karakter suatu string
var text = 'njsasasjkasklasklaldklkdalksalksalklksklasklaks';
console.log(text.length);

// .indexOf :
var title = 'Job Connector Web Development';
console.log(title.indexOf('o')); // 1
console.log(title.lastIndexOf('o')); // 23

// .slice   : Memotong
var description = 'Lorem ipsum...';
console.log(description.slice(0, 3)); // Mengambil karakter dari index ke-0 - ke-2

// .replace :
var paragraph = 'Purwadhika Digital School';
console.log(paragraph.replaceAll('i', 'u'));

// 2. Number Build in Method
// .toString    : Merubah tipe data number menjadi tipe data string
var phoneNumber = 6281113334123;
phoneNumber = phoneNumber.toString(); // Re-assign / update value / replace value
console.log(phoneNumber);
console.log(typeof phoneNumber);

// > DATE DATA TYPES
var now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());




