var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, match: /@/, required: true },
    age: { type: Number, default: 0 },
  },
  { timestamps: true }
);

let User = mongoose.model('User', userSchema);

module.exports = User;
