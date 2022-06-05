class Product {

  id = null;
  name = '';
  img = '';
  price = null;
  inventory = null;

  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.inventory = Math.floor(Math.random() * (20)) + 1;
  }


}

module.exports = Product