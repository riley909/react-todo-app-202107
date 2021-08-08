function TodoItem({ item, todoList, setTodoList }) {
  return (
    <li className="todo-item">
      <input type="checkbox" className="todo-item-checkbox" />
      <span className="todo-item-content">{item.content}</span>
      <span>{item.created}</span>
      <span>{item.lastEdited}</span>
      <span>{item.ref}</span>
      <button type="button" className="todo-item-edit-btn">
        수정
      </button>
      <button type="button" className="todo-item-del-btn">
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
