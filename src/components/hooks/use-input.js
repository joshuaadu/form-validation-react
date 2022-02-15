import { useState } from "react";
const useInput = (type) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const enteredValueIsValid =
    type === "email" ? enteredValue.includes("@") : enteredValue.trim() !== "";
  const inputValueIsInValid = !enteredValueIsValid && inputTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setInputTouched(true);
  };

  return {
    enteredValue,
    setEnteredValue,
    setInputTouched,
    enteredValueIsValid,
    inputValueIsInValid,
    inputChangeHandler,
    inputBlurHandler
  };
};

export default useInput;
