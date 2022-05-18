const User = require('../models/User')
const Users = require('../database/Users')

module.exports = function (io) {

  io.on("connection", (socket) => {
    // create a User
    var user = new User(socket)
    // add User into Users
    Users.addUser(user)
    console.log(`Client ${socket.id} connected`)

    // remove User from users
    socket.on('disconnect', () => {
      Users.removeUser(socket.id)
      console.log(`Client ${socket.id} disconnect`)
    })

  })

}