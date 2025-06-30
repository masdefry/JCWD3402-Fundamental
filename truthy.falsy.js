// > TRUTHY FALSY
// Nilai non-boolean yg dikonversi menjadi nilai boolean dalam konteks pengkondisian, komparasi, dll

let name = '';
// name = '' > name is required
// name = 'abc' > name is complete

if (!name) console.log('Name is required');
else console.log('Name is Complete');

let age = 17;

if (!age) console.log('Age is invalid');
else console.log('Age is valid');

let description = 'lorem';

if (description) console.log('Description filled');
else console.log('Description is empty');

/*
    Buatlah pengkondisian yang digunakan untuk memvalidasi inputan, dengan syarat sbb:
    '', "", 0, null, undefined, -1 sampai -tak terhingga ---> Input invalid
    'abc', 1 - tak terhingga ---> Input Valid

    ex.
    let input = ''
    output di terminal: Input Invalid

    let input = 100
    output di terminal: Input Valid
*/
let input = null;
if (input === '' || input === null || input === undefined || input < 0) {
  console.log('Input Invalid');
} else {
  console.log('Input Valid');
}

if (input) console.log('Input Valid');
else console.log('Input Invalid');
