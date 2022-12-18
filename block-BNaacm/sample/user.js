var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  password: { type: String, minlength: 5 },
  name: { type: String, required: true },
});

var User = mongoose.model('User', userSchema);

module.exports = User;
