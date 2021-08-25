import axios from 'axios';

export async function getTodos() {
  const res = await axios.get('http://localhost:5000/api/todos');
  return res.data.data;
}

export async function addTodo(todo) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const res = await axios.post('http://localhost:5000/api/todos', todo, config);
  return res.data.data;
}

export async function deleteTodo(id) {
  await axios.delete(`http://localhost:5000/api/todos/${id}`);
}

export async function completeTodo(id) {
  await axios.put(`http://localhost:5000/api/todos/${id}`, { completed: true });
}