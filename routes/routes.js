var express = require("express")
var router = express.Router()
const HomeController = require("../controllers/HomeController");
const ProductController = require("../controllers/ProductController");

router.get('/', HomeController.index);
router.get('/products', ProductController.all);
router.post('/product', ProductController.create);
router.post('/delete', ProductController.delete);
router.get('/add', ProductController.add);

module.exports = router