// // setTimeOut
// // Promise

// console.log('Hello');
// setTimeout(() => {
//   console.log('>>>');
// }, 3000);
// console.log('Hi');

// // Case. Akan ada 2 buah function. Function-01 Menghapus data, function-02 Mengambil data

// const db = ['Apel', 'Anggur', 'Jeruk'];

// function DeleteData(cb) {
//   setTimeout(() => {
//     db.pop();
//     cb()
//   }, 3000);
// }

// function GetData() {
//   setTimeout(() => {
//     console.log(db);
//   }, 2000);
// }

// // Callback Hell
// DeleteData(
//     DeleteData(
//         GetData
//     )
// );

// > PROMISE
// Fungsi untuk meng-handle async process
// Fungsi memiliki 2 parameter, resolve, reject
// Resolve: Promise berhasil dijalankan
// Reject: Promise gagal dijalankan
const brands = ['Toyota', 'Wuling', 'Honda', 'Daihatsu'];

const deleteDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(brands);
      brands.pop();
      resolve('Delete data success');
    }, 3000);
  });
};

const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(brands);
    }, 2000);
  });
};

// Handling error promise
// .then & .catch
// deleteDataPromise()
//   .then((res) => {
//     return getDataPromise();
//   })
//   .then((response) => {
//     console.log('then');
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log('catch');
//     console.log(error);
//   });

// try & catch
const handleDataPromise = async () => {
  try {
    console.log('Delete-01');
    let resDeletePromise1 = await deleteDataPromise();
    console.log('Delete-02');
    let resDeletePromise2 = await deleteDataPromise();
    let resGetPromise = await getDataPromise();
    console.log(resGetPromise);
  } catch (error) {
    console.log(error);
  }
};

handleDataPromise();



// fetch
// https://jsonplaceholder.typicode.com/posts