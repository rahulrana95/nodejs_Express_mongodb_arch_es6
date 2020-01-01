
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const schema = new Schema({
  title: {
    type: String,
    required: [true],
  },
  description: {
    type: String,
    required: [true],
  },
  questionId: {
    type: ObjectId,
    ref: 'Question',
      },
  createdAt: {
    type: Date,
    required: [true],
  },
  createdBy: {
    type: ObjectId,
  }
});
module.exports = { schema };