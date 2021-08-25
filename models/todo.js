const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Todo", TodoSchema);