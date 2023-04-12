import React, { useState } from "react";
import Collapsible from "./Collapsible";
interface Todo {
  name: string;
  done: boolean;
}

const DeleteFromList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    setTodos([...todos, { name: value, done: false }]);
    setValue("");
  };

  const handleOnItemClick = (todo: string) => {
    let updatedTodos = todos.map((n) => {
      if (n.name === todo) {
        return { ...n, done: !n.done };
      }
      return n;
    });

    setTodos(updatedTodos);
  };

  return (
    <div id="todo-list-strikethrough" className="container">
      <h2>To-do List with Strikethrough</h2>
      <Collapsible>
        <span>Create a to-do list</span>
        <span>Click on each item to strikethrough item</span>
        <span>Click on item again to remove strikethrough</span>
      </Collapsible>
      <input
        className="round-input"
        type="text"
        value={value}
        onChange={changeHandler}
      />{" "}
      <button className="action" onClick={submitHandler}>
        Add
      </button>
      <hr />
      <ul>
        {todos.length > 0 &&
          todos.map((todo, index) => {
            return (
              <li
                className={todo.done ? "strike-through" : undefined}
                key={index}
                onClick={() => handleOnItemClick(todo.name)}
              >
                {todo.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default DeleteFromList;
