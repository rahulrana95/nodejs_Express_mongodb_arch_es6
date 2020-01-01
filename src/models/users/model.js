const mongoose = require('mongoose');
import uniqueValidator from "mongoose-unique-validator";
import slugify from 'slugify';
const { schema } = require('./schema');


const Users = mongoose.model('Users', schema);
module.exports =  Users ;