// > OBJECT
/*
    const dataDiri = {
        nama: value, 
        ttl: value, 
        alamat: value, 
        ...
    }
*/

const dataDiri = {
  nama: 'Defryan',
  ttl: 'Sidoarjo',
  alamat: 'Bogor',
};

console.log(dataDiri.nama);
console.log(dataDiri['nama']);

dataDiri.nama = 'Ryan';
dataDiri['nama'] = 'Defryan';
console.log(dataDiri);

delete dataDiri.nama;
console.log(dataDiri);

// Case. Pengambilan data dari sebuah API atau database
const user = {};

console.log(user?.name?.firstName);

// > ARRAY of OBJECT
const students = [
  { name: 'Raka', address: 'Jabodetabek' },
  { name: 'Jo', address: 'Jabodetabek' },
  { name: 'Fo', address: 'Jabodetabek' },
  { name: 'Hasbi', address: 'Jabodetabek' },
];

// > DESTRUCTURE OBJECT
// Menyimpan property object kedalam variable
const campusPurwadhika = {
  address: 'BSD',
  phoneNumber: '021331331',
  pic: 'Yuke',
};

const { phoneNumber, pic, address } = campusPurwadhika;
console.log(address);

// > SPREAD OPERATOR
// 1. Copy by value
// 2. Meng-copy seluruh property lama dan menambahkan property baru
const product = {
  name: 'Apel',
  price: 10000,
};

const newProduct = {...product, stocks: 100}; // Copy by value
newProduct.name = 'Semangka';
console.log(product);
console.log(newProduct);
