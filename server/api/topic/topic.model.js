var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TopicSchema = new Schema({
  title: String,
  parentNodes: [String], //ref itself?
  childrenNodes: [String], //ref itself?
  references: [String] //a string of links
});

module.exports = mongoose.model('Topics', TopicSchema);