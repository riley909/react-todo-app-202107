import { useState } from 'react';
import { fetch_custom } from '../utilities';

function TodoItem({ item, todoList, setTodoList }) {
  const [edit, setEdit] = useState(false);
  const [newContent, setNewContent] = useState(item.content);

  const onChangeCheckbox = () => {
    const nextTodo = todoList.map((todo) => ({
      ...todo,
      status: todo.id === item.id ? !todo.status : todo.status,
    }));
    setTodoList(nextTodo);

    let statNum = 0;
    if (item.status === false) statNum = 0;
    else if (item.status === true) statNum = 1;
    fetch_custom.updateTodoStatus(item.id, statNum);
  };

  const onClickEditBtn = () => {
    setEdit(true);
  };

  const onChangeEditInput = (e) => {
    setNewContent(e.target.value);
  };

  const onClickEditSubmitBtn = () => {
    const updatedList = todoList.map((todo) => ({
      ...todo,
      content: todo.id === item.id ? newContent : todo.content,
    }));
    setTodoList(updatedList);
    fetch_custom.updateTodo(item.id, newContent, item.ref);
    setEdit(false);
  };

  const onClickDelBtn = () => {
    if (window.confirm(`삭제할까요?`)) {
      fetch_custom.deleteTodo(item.id);
      const updatedList = todoList.filter((todo) => {
        return todo.id !== item.id;
      });
      setTodoList(updatedList);
    }
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        className="todo-item-checkbox"
        checked={item.status}
        onChange={onChangeCheckbox}
      />
      {edit && (
        <input
          type="text"
          className="todo-item-edit-input"
          value={newContent}
          onChange={onChangeEditInput}
        />
      )}
      <span className="todo-item-content">
        {item.content} |&nbsp;<span>{item.created} | </span>
        <span>{item.lastEdited} | </span>
        <span>{item.ref} &nbsp;</span>
      </span>
      {item.status === 0 ? (
        edit ? (
          <button
            type="button"
            className="todo-item-edit-btn"
            onClick={onClickEditSubmitBtn}>
            완료
          </button>
        ) : (
          <button type="button" className="todo-item-edit-btn" onClick={onClickEditBtn}>
            수정
          </button>
        )
      ) : null}

      <button type="button" className="todo-item-del-btn" onClick={onClickDelBtn}>
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
