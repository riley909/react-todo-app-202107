import TodoItem from './TodoItem';

function TodoList({ todoList, setTodoList }) {
  return (
    <div className="todolist">
      <ul className="todolist-ul">
        {todoList &&
          todoList.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
