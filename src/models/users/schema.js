
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  username: {
      type: String,
      required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: String,
  contactNumber: Number,
  country: String,
  appsAllowed: [Number]
});

module.exports = { schema };