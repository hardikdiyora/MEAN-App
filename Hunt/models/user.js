const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

autoIncrement = require('mongoose-auto-increment');


// User Schema
const UserSchema = mongoose.Schema({
  userId: {
    type: Number
  },
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  area: [{
    type: String
  }],
   office: {
    type: String,
    required: true
  },
   size: {
    type: String,
  }
});

UserSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'userId', startAt: 1});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}

module.exports.getAllUsers = function(callback){
  User.find(callback);
}
