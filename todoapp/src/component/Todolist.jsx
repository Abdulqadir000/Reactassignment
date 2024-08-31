function Todolist({ todos, onDelete, toggleTodo, onEdit }) {
  return (
    <>
      {todos.map((todo, ind) => {
        return (
          <div className="flex my-2 bg-slate-100" key={todo.id}>
            <h3
              onClick={() => toggleTodo(todo.id)}
              style={{ textDecoration: todo.completed && "line-through" }}
              className="cursor-pointer text-2xl text-left py-2 pl-2 font-mono font-medium flex-1"
            >
              {todo.todo}
            </h3>
            <button
              onClick={() => onDelete(todo.id)}
              className="bg-blue-300 rounded-sm p-3 px-4"
            >
              Delete
            </button>
            <button
              onClick={() => onEdit(todo.id, todo.todo)}
              className="bg-blue-300 rounded-sm p-3 px-4 ml-2"
            >
              Edit
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Todolist;
