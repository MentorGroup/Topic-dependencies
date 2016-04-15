var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TopicSchema = new Schema({
  title: String,
  parentNodes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Topics'}],
  childrenNodes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Topics'}],
  references: [String] //a string of links
});

module.exports = mongoose.model('Topics', TopicSchema);