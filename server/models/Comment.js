const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  store_id: String,
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
