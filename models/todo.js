const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  text: {
    type: String,
    trim: true
  },
  completed: Boolean,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Todo", TodoSchema);