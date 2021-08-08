import React, { useState } from 'react';
import { fetch_custom } from '../utilities';
function InputBox({ todoList, setTodoList }) {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClickSubmitBtn = () => {
    const create = fetch_custom.createTodo({ content: text, ref: '' });
    setTodoList(create);

    setText('');
  };

  return (
    <div className="inputbox">
      <input
        type="text"
        name="todoItem"
        value={text}
        placeholder="할 일을 입력해주세요"
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
