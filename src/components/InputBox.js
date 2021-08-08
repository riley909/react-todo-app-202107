import React, { useState } from 'react';
import { fetch_custom } from '../utilities';
function InputBox({ todoList, setTodoList }) {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClickSubmitBtn = () => {
    fetch_custom.createTodo(text, '').then((data) => {
      const result = data.data;
      const addedList = todoList.concat(result);
      setTodoList(addedList);
    });

    fetch_custom.getAllTodos().then((data) => {
      console.log('setTodoList', data.data);
      const result = data.data;
      setTodoList(result);
    });

    setText('');
  };

  return (
    <div className="inputbox">
      <input
        type="text"
        name="todoItem"
        value={text}
        placeholder="할 일을 입력하세요"
        className="inputbox-input"
        onChange={onChange}
      />
      <button type="submit" className="inputbox-submit-btn" onClick={onClickSubmitBtn}>
        추가
      </button>
    </div>
  );
}

export default InputBox;
