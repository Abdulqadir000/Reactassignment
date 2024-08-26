import { useState } from "react";
import Todoinput from "./component/Todoinput";

export default function App() {
  const [todos, setTodos] = useState([
    {
      todo: "chai",
      Id: Date.now(),
      completed: false,
    },
  ]);
  return (
    <>
      <div className="w-3/4 mx-auto mt-5">
        <h1 className="font-bold text-3xl text-center">My Todo</h1>
        <Todoinput />
        {todos.map((todo, ind) => {
          return (
            <div className="flex bg-slate-100" key={todo.Id}>
              <h3 className="text-2xl text-left py-2 pl-2 font-mono font-medium flex-1">
                {todo.todo}
              </h3>
              <button className="bg-blue-300 rounded-sm p-3 px-4">Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
