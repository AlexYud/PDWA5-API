class HomeController {

  index(req, res) {
    res.status(200).json('Online')
  }

  getTime(req, res) {
    res.status(200).json()
  }

}

module.exports = new HomeController();