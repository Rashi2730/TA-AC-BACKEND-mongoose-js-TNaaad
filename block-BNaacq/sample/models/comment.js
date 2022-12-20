var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    content: String,
    article: Schema.Types.ObjectId,
    author: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

let Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
