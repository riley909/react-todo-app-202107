import React, { useEffect, useState } from 'react';
import InputBox from '../components/InputBox';
import TodoList from '../components/TodoList';
import { fetch_custom } from '../utilities';

function Home() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch_custom.getAllTodos().then((data) => {
      console.log('setTodoList', data.data);
      const result = data.data;
      setTodoList(result);
    });
  }, []);

  return (
    <div className="home-page">
      <InputBox todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default Home;
