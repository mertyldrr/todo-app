const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todos');

router
  .route('/')
  .get(todoController.getTodos)
  .post(todoController.addTodo);

router
  .route('/:id')
  .put(todoController.completeTodo)
  .delete(todoController.deleteTodo);

module.exports = router;