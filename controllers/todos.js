const Todos = require('../models/todo');

// @desc Get all todos
// @route GET /api/todos
// @access Public
exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todos.find();

    return res.status(200).json({
      success: true,
      count: todos.length,
      data: todos
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
}

// @desc Add todo item
// @route POST /api/todos
// @access Public
exports.addTodo = async (req, res, next) => {
  try {
    const { text } = req.body;
    const todo = await Todos.create(req.body);
    console.log(todo);
    return res.status(201).json({
      success: true,
      data: todo
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const message = Object.values(error.errors).map(val => val.message);

      res.status(400).json({
        success: false,
        error: message
      })
    }
    else {
      return res.status(500).json({
        success: false,
        error: 'Server error'
      });
    }
  }
}

// @desc Delete todo item
// @route DELETE /api/todos/:id
// @access Public
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todos.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        error: 'No todo found'
      });
    }

    await todo.remove();

    return res.status(200).json({
      success: true,
      data: {}
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
}

// @desc Update todo item
// @route UPDATE /api/todos/:id
// @access Public
exports.completeTodo = async (req, res, next) => {
  try {
    const todo = await Todos.findByIdAndUpdate(req.params.id, req.body);
    if (!todo) {
      return res.status(404).json({
        success: false,
        error: 'No todo found'
      });
    }

    return res.status(200).json({
      success: true,
      data: todo
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
}