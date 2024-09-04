import { useCallback, useState } from "react";
import Todoinput from "./component/Todoinput";
import Todolist from "./component/Todolist";

export default function App() {
  const [filter, setFilter] = useState("All");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditId, setCurrentEditId] = useState(null);

  const handleAddTodo = useCallback(() => {
    if (isEditing) {
      setTodos(
        todos.map((item) =>
          item.id === currentEditId ? { ...item, todo } : item
        )
      );
      setIsEditing(false);
      setCurrentEditId(null);
    } else {
      const todosArr = [
        ...todos,
        {
          todo,
          id: Date.now(),
          completed: false,
        },
      ];
      setTodos([...todosArr]);
    }
    setTodo("");
  }, [todo, isEditing, currentEditId]);

  const handleonDelete = useCallback(
    (id) => {
      const filter = todos.filter((data) => data.id !== id);
      setTodos([...filter]);
    },
    [todos]
  );

  const handleOnToggleTodo = useCallback(
    (id) => {
      const todosArr = [...todos];
      const todoInd = todosArr.findIndex((data) => data.id == id);
      todosArr[todoInd].completed = !todosArr[todoInd].completed;
      setTodos([...todosArr]);
    },
    [todos]
  );

  const handleEditTodo = (id, currentTodo) => {
    setIsEditing(true);
    setCurrentEditId(id);
    setTodo(currentTodo);
  };

  const filteredTodos = todos.filter((data) => {
    if (filter == "All") {
      return true;
    }
    if (filter == "Completed" && data.completed) {
      return true;
    }
    if (filter == "UnCompleted" && !data.completed) {
      return true;
    }
  });

  return (
    <>
      <div className="w-3/4 mx-auto mt-5">
        <h1 className="font-bold text-3xl text-center">My Todo</h1>
        <Todoinput
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onClick={handleAddTodo}
        />
        <div className="flex justify-around items-center">
          <button onClick={() => setFilter("All")}>All</button>
          <button onClick={() => setFilter("Completed")}>Completed</button>
          <button onClick={() => setFilter("UnCompleted")}>Un Completed</button>
        </div>
        <Todolist
          toggleTodo={handleOnToggleTodo}
          todos={filteredTodos}
          onDelete={handleonDelete}
          onEdit={handleEditTodo}
        />
      </div>
    </>
  );
}
