import React, { useState } from "react";
import Collapsible from "./Collapsible";

const DeleteFromList = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    setList([...list, value]);
    setValue("");
  };

  const deleteHandler = (item) => {
    setList(list.filter((ele) => ele !== item));
  };

  return (
    <div className="paper">
      <Collapsible>
        <p>Create a To-Do list</p>
      </Collapsible>
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
