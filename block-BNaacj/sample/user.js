var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  password: { type: String, min: 5, max: 15 },
  createdAt: { type: Date, default: Date.now() },
});

