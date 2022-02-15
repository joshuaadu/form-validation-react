import { useState } from "react";
const useInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const enteredValueIsValid = enteredValue.trim() !== "";
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
