const axios = require('axios');

export const fetch_custom = {
  getAllTodos: () => {
    const result = axios
      .get(`http://localhost:5000/todos`, {
        headers: {
          'Content-Type': 'application/json',
        },
        crossDomain: true,
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
    return result;
  },
  getTodoById: (id) => {
    const result = axios
      .get(`http://localhost:5000/todos/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        crossDomain: true,
      })
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
    return result;
  },
  createTodo: (data) => {
    const result = axios
      .post(
        `http://localhost:5000/todos`,
        { data: data },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          crossDomain: true,
        }
      )
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
    return result;
  },
  deleteTodo: (id) => {
    const result = axios
      .delete(`http://localhost:5000/todos/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        crossDomain: true,
      })
      .catch((err) => console.log(err));
    return result;
  },
  updateTodo: (id, data) => {
    const result = axios
      .patch(
        `http://localhost:5000/todos/${id}`,
        { data: data },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          crossDomain: true,
        }
      )
      .then((data) => {})
      .catch((err) => console.log(err));
    return result;
  },
  updateTodoStatus: (id, status) => {
    const result = axios
      .patch(
        `http://localhost:5000/todos/${id}/status`,
        { status: status },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          crossDomain: true,
        }
      )
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
    return result;
  },
};
