class Products {

  io = undefined
  list = [
    {
      id: 0,
      name: 'Skinny Jeans Rasgada',
      img: 'https://www.w3schools.com/w3images/jeans1.jpg',
      price: 'R$ 75,00',
      inventory: Math.floor(Math.random() * (20)) + 1
    },
    {
      id: 1,
      name: 'Mega Jeans Rasgada',
      img: 'https://www.w3schools.com/w3images/jeans2.jpg',
      price: 'R$ 135,00',
      inventory: Math.floor(Math.random() * (20)) + 1
    },
    {
      id: 2,
      name: 'Vintage Skinny Jeans',
      img: 'https://www.w3schools.com/w3images/jeans4.jpg',
      price: 'R$ 90,00',
      inventory: Math.floor(Math.random() * (20)) + 1
    }
  ]
  length = 3;

  addProduct(product) {
    var formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    this.length++;
    product.id = this.length;
    product.price = formatter.format(product.price);
    product.img = `https://www.w3schools.com/w3images/jeans${Math.floor(Math.random() * (4)) + 1}.jpg`
    this.list.push(product);
    this.io.emit('update products', this.list);
  }

  removeProduct(id) {
    this.list = this.list.filter(p => p.id !== id);
    this.io.emit('update products', this.list);
  }

  findProduct(id) {
    var product = this.list.filter(p => p.id === id);
    return product[0];
  }

}

module.exports = new Products();