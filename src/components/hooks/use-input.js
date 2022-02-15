import { useState } from "react";

const useInput = (validatorFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const enteredValueIsValid = validatorFn(enteredValue);

  const hasError = !enteredValueIsValid && inputTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setInputTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setInputTouched(false);
  };

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    error: hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
