const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name:String,
  email: String,
  number:String,
  subject:String,
  message:String
})

module.exports = mongoose.model('User', UserSchema)
