import React, { useState, useEffect } from "react";
import { palindrome } from "../utils/utils";
import Collapsible from "./Collapsible";

const Palindrome: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [isPalindrome, setIsPalindrome] = useState<boolean>(false);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  useEffect(() => setIsSubmitButtonDisabled(!value), [value]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    setIsPalindrome(palindrome(value));
  };

  return (
    <div id="fizz-buzz" className="container">
      <h2>Palindrome</h2>
      <Collapsible>
        <span>Check if input is a palindrome</span>
      </Collapsible>
      <input
        className="round-input"
        type="text"
        value={value}
        onChange={changeHandler}
      />
      <button
        disabled={isSubmitButtonDisabled}
        className="action"
        onClick={submitHandler}
      >
        Submit
      </button>
      <hr />
      <h3>{isPalindrome.toString()}</h3>
    </div>
  );
};

export default Palindrome;
