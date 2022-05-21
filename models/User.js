class User {

  socket = undefined
  socketId = undefined

  constructor(socket) {
    this.socket = socket;
    this.socketId = socket.id;
  }


}

module.exports = User