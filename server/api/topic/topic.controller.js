var Topics = require('./topic.model');

module.exports = {
  createLesson (req, res) {
      new Topic(req.body).save((err, data) => {
          if (err) {
              res.status(500).send(err);
          } else {
              res.status(200).send(data);
          }
      })
  },
  getLesson (req, res){
      Topic.findById(req.params.title, (err, topic) => {
          if (err) {
              res.status(500).send(err);
          } else {
              res.status(200).send(topic);
          }
      })
  },
  putLesson (req, res){
      Topic.findByIdAndUpdate(req.params.title, req.body, {new: true}, (err, topic) => {
          if (err) {
              res.status(500).send(err);
          } else {
              res.status(200).send(topic);
          }
      })
  },
  deleteLesson (req, res){
      Topic.findByIdAndRemove(req.params.title, (err, deletedTopic) => {
          if (err) {
              res.status(500).send(err);
          } else {
              res.status(200).send(deletedTopic);
          }
      })
  }
};