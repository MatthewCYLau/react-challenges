import React, { useState, useEffect } from "react";
import { palindrome } from "../utils/utils";
import Collapsible from "./Collapsible";

interface IPalindrome {
  isPalindrome: boolean;
  copy: string;
}

const Palindrome: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [palindromeState, setPalindromeState] = useState<IPalindrome>({
    isPalindrome: false,
    copy: `${value} is not palindrome.`,
  });
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  useEffect(() => setIsSubmitButtonDisabled(!value), [value]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    const isPalindrome = palindrome(value);
    setPalindromeState({
      isPalindrome: isPalindrome,
      copy: `${value} is ${isPalindrome ? "" : "not "} palindrome.`,
    });
    setValue("");
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
      <h3>{palindromeState.copy}</h3>
    </div>
  );
};

export default Palindrome;
