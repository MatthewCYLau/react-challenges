import React, { useState } from "react";
import Collapsible from "./Collapsible";

const DeleteFromList = () => {
  const [list, setList] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    setList([...list, value]);
    setValue("");
  };

  const deleteHandler = (item: string) => {
    setList(list.filter((ele) => ele !== item));
  };

  return (
    <div id="todo-list" className="container">
      <h2>To-do List</h2>
      <Collapsible>
        <span>Create a to-do list</span>
        <span>Click on each item to remove item from list</span>
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
        {list.length > 0 &&
          list.map((item, index) => {
            return (
              <li key={index} onClick={() => deleteHandler(item)}>
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default DeleteFromList;
