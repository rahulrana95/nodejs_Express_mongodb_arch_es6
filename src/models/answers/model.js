// models/answers/model.js
const mongoose = require('mongoose');
const { schema } = require('./schema');
// add hooks here
schema.pre('save', function() {
  return doStuff().
    then(() => doMoreStuff());
});
const Answer = mongoose.model('Answer', schema);
module.exports = { Answer };