const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

autoIncrement = require('mongoose-auto-increment');

// User Schema
const DefectSchema = mongoose.Schema({
  defectId:{
    type: Number
  },
  username: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  severity: {
    type: String,
    required: true
  },
  components: {
    type: String,
    required: true
  },
  attachments: [{
    type: String
  }],
  state: {
    type: String
  },
  comments: {
    type: String
  },
  date:{
    type: Date,
    default: Date.now
  }
});

DefectSchema.plugin(autoIncrement.plugin, { model: 'Defect', field: 'defectId', startAt: 1});

const Defect = module.exports = mongoose.model('Defect', DefectSchema);

module.exports.addDefect = function(newDefect, callback){
  newDefect.save(callback);
}

module.exports.getDefectById = function(id, callback){
  Defect.findById(id, callback);
}

module.exports.getDefectsByUsername = function(username, callback){
  const query = {username: username}
  Defect.find(query, callback);
}

module.exports.getAllDefects = function(callback){
  Defect.find(callback);
}

module.exports.updateDefect = function(id, updatedDefect, options, callback){
  var query = {_id: id};
  var update = {
    summary: updatedDefect.summary,
    severity: updatedDefect.severity,
    components: updatedDefect.components,
    attachment: updatedDefect.attachment,
    description: updatedDefect.description
  };
  Defect.findOneAndUpdate(query, updatedDefect, options, callback);
}

module.exports.deleteDefect = function(id, callback){
  var query = {_id: id};
  Defect.remove(query, callback);
}

module.exports.distinctCount = function(callback){
  var pipe = {$group:{_id:"$username",total:{$sum:1}}};
  Defect.aggregate(pipe, callback);
}

