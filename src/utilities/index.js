const axios = require('axios');

export const fetch_custom = {
  getAllTodos: (page = 1) => {
    const result = axios
      .get(`http://localhost:5000/todos?${page}`, {
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
  getSearchResults: (search) => {
    const query = {};
    if (search.length) {
      query.search = search;
    }

    const result = axios
      .get(`http://localhost:5000/todos?search=${search}`)
      .then((data) => {
        console.log('filtered', data);
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
  createTodo: (content, ref) => {
    const result = axios
      .post(
        `http://localhost:5000/todos`,
        { content: content, ref: ref },
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
  updateTodo: (id, content, ref) => {
    const result = axios
      .patch(
        `http://localhost:5000/todos/${id}`,
        { content: content, ref: ref },
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
