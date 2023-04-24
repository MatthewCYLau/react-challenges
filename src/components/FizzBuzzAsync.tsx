import React, { useState } from "react";
import Collapsible from "./Collapsible";

const FizzBuzz: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const fizzBuzz = async (limit: number) => {
    for (var i = 1; i < limit; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (i % 15 == 0) console.log("FizzBuzz");
      else if (i % 3 == 0) console.log("Fizz");
      else if (i % 5 == 0) console.log("Buzz");
      else console.log(i);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    fizzBuzz(+value);
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
