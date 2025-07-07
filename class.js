const products = [
  { name: 'Apel', price: 10000, stock: 10 },
  { nama: 'Jeruk', price: 15000, stock: 15 },
  { name: 'Anggur', price: 20000, stock: 20 },
];

products.forEach((product) => {
  console.log(
    `Name: ${product?.name}: Rp.${product?.price} (Stock: ${product?.stock})`
  );
});

// > CLASS
// Cetakan untuk membuat object dengan property yg sama

class Products {
  constructor(_name, _price, _stock) {
    this.name = _name;
    this.price = _price;
    this.stock = _stock;
  }
}

const product1 = new Products('Apel', 15000);

{
  const products = [
    new Products('Apel', 45000, 100),
    new Products('Jeruk', 25000, 100),
    new Products('Anggur', 50000, 100),
  ];

  console.log(products);
}

/*
    Challenge. 
    Disebuah supermarket terdapat banyak sekali produk dengan berbagai kategori, seperti snack, pakaian, dan elektronik. 
    01 - Tentukan entitas/property apa saja yang terdapat di tiap-tiap kategori produk
    Snack
    v name
    v price
    expiryDate
    flavour
    v discount
    nett
    v stock
    codeProduct
    composition

    Pakaian
    name
    price
    size
    fitType
    fabric
    stock
    weight 
    made
    brand
    color
    discount

    Elektronik
    name
    price
    stock
    model
    spec
    brand
    purpose 
    color
    guarantee
    discount

    02 - Buatkan class untuk tiap kategori produk
*/
class Snack {
  constructor(
    name,
    price,
    expiryDate,
    flavour,
    discount,
    nett,
    stock,
    codeProduct,
    composition
  ) {
    this.name = name;
    this.price = price;
    this.expiryDate = expiryDate;
    this.flavour = flavour;
    this.discount = discount;
    this.nett = nett;
    this.stock = stock;
    this.codeProduct = codeProduct;
    this.composition = composition;
  }
}

class Clothes {
  constructor(
    name,
    price,
    size,
    fitType,
    fabric,
    stock,
    weight,
    made,
    brand,
    color,
    discount
  ) {}
}

class Electronic {
  constructor(
    name,
    price,
    stock,
    model,
    spec,
    brand,
    purpose,
    color,
    guarantee,
    discount
  ) {}
}

// > INHERITANCE
// Pewarisan property

{
  class Products {
    constructor(name, price, stock, discount) {
      this.name = name;
      this.price = price;
      this.stock = stock;
      this.discount = discount;
    }
  }

  class Snack extends Products {
    constructor(
      name,
      price,
      expiryDate,
      flavour,
      discount,
      nett,
      stock,
      codeProduct,
      composition
    ) {
      super(name, price, discount, stock);
      this.expiryDate = expiryDate;
      this.flavour = flavour;
      this.nett = nett;
      this.codeProduct = codeProduct;
      this.composition = composition;
    }
  }
}

// > METHOD
// Function yang dibungkus kedalam sebuah class/object

{
  class Products {
    name = '';
    price = 0;

    constructor(_name, _price) {
      this.name = _name;
      this.price = _price;
    }

    getDataProduct() {
      return `${this.name}: Rp.${this.price}`;
    }
  }

  const product = new Products('Apel', 15000);
  console.log(`${product.name}: Rp.${product.price}`);
}

// > PUBLIC PROPERTY & PRIVATE PROPERTY
class Users {
  username = '';
  #password = '';
  phoneNumber = '';

  constructor(username, phoneNumber) {
    this.username = username;
    this.phoneNumber = phoneNumber;
  }

  get getDataPassword() {
    return this.#password;
  }

  set setDataPassword(password) {

    if (password.length < 6) {
      console.log('Password have minimum 6 characters');
    } else {
      return (this.#password = password);
    }
  }
}

const user1 = new Users('defryan', '08113344558822');
Object.freeze(user1);
console.log((user1.setDataPassword = 'abc12'));
console.log(user1);
console.log(user1.getDataPassword);
