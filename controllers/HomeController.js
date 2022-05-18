class HomeController {

  index(req, res) {
    res.status(200).json('Online')
  }

}

module.exports = new HomeController();