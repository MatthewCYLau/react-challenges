import React, { useState } from "react";

const DeleteFromList = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    setTodos([...todos, { name: value, done: false }]);
    setValue("");
  };

  const handleOnItemClick = (todo) => {
    let updatedTodos = todos.map((n) => {
      if (n.name === todo) {
        return { ...n, done: !n.done };
      }
      return n;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="paper">
      <input
        className="round-input"
        type="text"
        value={value}
        onChange={changeHandler}
      />{" "}
      <button className="submit" onClick={submitHandler}>
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
