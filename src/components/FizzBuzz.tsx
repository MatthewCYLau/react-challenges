import React, { useState } from "react";
import Collapsible from "./Collapsible";

const FizzBuzz: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const fizzBuzz = (limit: number): string[] => {
    return Array(limit)
      .fill(0)
      .map((_, i) => {
        const currentNumber = i + 1;
        let output = "";
        if (currentNumber % 3 === 0) output += "Fizz";
        if (currentNumber % 5 === 0) output += "Buzz";
        return output || currentNumber.toString();
      });
  };

  const submitHandler = () => {
    setList(fizzBuzz(+value));
    setValue("");
  };

  return (
    <div id="fizz-buzz" className="container">
      <h2>Fizz Buzz</h2>
      <Collapsible>
        <span>Iterate integers 1 to N</span>
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

export default FizzBuzz;
