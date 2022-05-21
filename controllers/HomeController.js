class HomeController {

  index(req, res) {
    res.status(200).json('Online')
  }

  getTime(req, res) {
    var date = new Date();
    date = date.toLocaleTimeString({hour: '2-digit', minute:'2-digit', second: '2-digit'});
    res.status(200).json(date)
  }

}

module.exports = new HomeController();