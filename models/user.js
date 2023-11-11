//model/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  roll: String,
  email: String,
  zipCode: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;
