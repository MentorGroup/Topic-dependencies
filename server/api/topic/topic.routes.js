var Ctrl = require('./topic.controller');

module.exports = function(app){
  app.route('/api/topic')
    .post(Ctrl.createLesson);
  app.route('/api/topic/:title') //would it be better to go by title or id? I would think id, but users will search by title
    .get(Ctrl.getLesson)
    .put(Ctrl.putLesson)
    .delete(Ctrl.deleteLesson);
};