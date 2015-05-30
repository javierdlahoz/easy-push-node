var mongoose = require ("mongoose");

var projectEntity = new mongoose.Schema({
  	name: String,
  	ip: String,
  	version: String
});

module.exports = mongoose.model('projects', projectEntity);