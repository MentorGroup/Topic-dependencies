var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TopicSchema = new Schema({
  title: {type: String, required: true},
  parentNodes: [{type: Schema.Types.ObjectId, ref: 'Topics'}],
  childrenNodes: [{type: Schema.Types.ObjectId, ref: 'Topics'}],
  references: [{
      name: {type: String},
      link: {type: String}
  }] //a string of links
});

module.exports = mongoose.model('Topics', TopicSchema);