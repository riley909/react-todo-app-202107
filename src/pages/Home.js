import React, { useEffect, useState } from 'react';
import InputBox from '../components/InputBox';
import SearchFilters from '../components/SearchFilters';
import TodoList from '../components/TodoList';
import { fetch_custom } from '../utilities';

function Home() {
  const [todoList, setTodoList] = useState([]);
  // const [totalPages, setTotalPages] = useState(0);
  // const [pageArr, setPageArr] = useState([]);

  // const pagination = () => {
  //   let arr = [];
  //   for (let i = 0; i < totalPages; i++) {
  //     arr.push(i);
  //   }
  //   setPageArr(arr);
  // };

  // const pageRequest = (page) => {
  //   fetch_custom.getAllTodos(page).then((data) => {
  //     const result = data.data;
  //     setTodoList(result);
  //   });
  // };

  useEffect(() => {
    fetch_custom.getAllTodos().then((data) => {
      console.log('setTodoList', data.data);
      const result = data.data;
      setTodoList(result);
      // setTotalPages(Math.ceil(result.length / 5));
    });
  }, []);

  // useEffect(() => {
  //   pagination();
  // }, [totalPages]);

  return (
    <div className="home-page">
      <SearchFilters todoList={todoList} setTodoList={setTodoList} />
      <hr />
      <InputBox todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <div className="pagination">
        {/* {pageArr.map((el) => (
          <button className="page-btn" key={el} onClick={pageRequest}>
            {el + 1}
          </button>
        ))} */}
      </div>
    </div>
  );
}

export default Home;
