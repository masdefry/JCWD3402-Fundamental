let input = 6287822114413;
input = input.toString();
let hiddenPhoneNumber = input.slice(0, -3) + '***';
console.log(hiddenPhoneNumber);

let email = 'defryan@gmail.com';
// defr***@***il.com

let findAtIndex = email.indexOf('@');
console.log(
  email.slice(0, findAtIndex - 3) +
    '***@***' +
    email.slice(findAtIndex + 4, email.length)
);




let username = 'Buni Putra Dimas';