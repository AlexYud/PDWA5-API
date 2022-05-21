var express = require("express")
var router = express.Router()
const HomeController = require("../controllers/HomeController")

router.get('/', HomeController.index);
router.get('/time', HomeController.getTime);

module.exports = router