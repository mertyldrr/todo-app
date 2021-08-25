// @desc Get all todos
// @route GET /api/todos
// @access Public
exports.getTodos = (req, res, next) => {
  res.send('GET Todos');
}

// @desc Add todo item
// @route POST /api/todos
// @access Public
exports.addTodo = (req, res, next) => {
  res.send('POST Todo');
}

// @desc Delete todo item
// @route DELETE /api/todos/:id
// @access Public
exports.deleteTodo = (req, res, next) => {
  res.send('DELETE Todos');
}