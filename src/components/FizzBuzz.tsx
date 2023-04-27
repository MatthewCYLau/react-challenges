import React, { useState, useEffect } from "react";
import { fizzBuzz } from "../utils/utils";
import Collapsible from "./Collapsible";

const FizzBuzz: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<string[]>([]);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  useEffect(() => setIsSubmitButtonDisabled(!+value), [value]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
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
      <button
        disabled={isSubmitButtonDisabled}
        className="action"
        onClick={submitHandler}
      >
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
