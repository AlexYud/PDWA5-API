class User {

  socket = undefined
  socketId = undefined
  name = undefined

  constructor(socket) {
    this.socket = socket;
    this.socketId = socket.id;
  }

  setName(name) {
    this.name = name;
  }

}

module.exports = User