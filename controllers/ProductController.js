const Products = require("../database/Products");
const Product = require("../models/Product");

class ProductController {

  all(req, res) {
    res.status(200).json(Products.list);
  }

  create(req, res) {
    const { name, price } = req.body;

    Products.addProduct(new Product(name, price));

    res.status(201).json('Produto criado!');
  }

  delete(req, res) {
    const { id } = req.body;

    Products.removeProduct(id);

    res.status(200).json('Produto excluído!');
  }

  add(req, res) {
    Products.addProduct({
      id: null,
      name: 'Novo Produto',
      img: `https://www.w3schools.com/w3images/jeans${Math.floor(Math.random() * (4)) + 1}.jpg`,
      price: Math.floor(Math.random() * (200)) + 1,
      inventory: Math.floor(Math.random() * (20)) + 1
    })

    res.status(201).json('Produto adicionado!');
  }

}

module.exports = new ProductController();