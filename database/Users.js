class Users {

  list = []

  addUser(user) {
    this.list.push(user)
  } 

  removeUser(id) {
    this.list = this.list.filter(u => u.socketId !== id)
  } 

  findUser(id) {
    var user = this.list.filter(u => u.socketId === id)
    return user[0]
  }

}

module.exports = new Users();