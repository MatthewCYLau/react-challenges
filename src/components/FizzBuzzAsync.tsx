import React, { useState } from "react";
import Collapsible from "./Collapsible";

const FizzBuzzAsync: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const fizzBuzz = async (limit: number) => {
    for (let i = 1; i <= limit; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      let output = "";
      if (i % 3 === 0) output += "Fizz";
      if (i % 5 === 0) output += "Buzz";
      setList((prev) => [...prev, output || i.toString()]);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    setValue("");
    fizzBuzz(+value);
  };

  return (
    <div id="fizz-buzz-async" className="container">
      <h2>Fizz Buzz Async</h2>
      <Collapsible>
        <span>Iterate integers 1 to N at one second interval</span>
        <span>
          For multiples of 3 print Fizz; for the multiples of 5 print Buzz
        </span>
        <span>For multiples of 15 print FizzBizz</span>
      </Collapsible>
      <input
        className="round-input"
        type="text"
        value={value}
        onChange={changeHandler}
      />{" "}
      <button className="action" onClick={submitHandler}>
        Submit
      </button>
      <hr />
      <ul>
        {list.length > 0 &&
          list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
      </ul>
    </div>
  );
};

export default FizzBuzzAsync;
