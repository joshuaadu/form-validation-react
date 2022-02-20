import { useReducer } from "react";

const initialState = { value: "", istouched: false };
const reducerFn = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, istouched: state.istouched };
    case "BLUR":
      return { value: state.value, istouched: action.istouched };
    case "RESET":
      return { ...initialState };
    default:
      return;
  }
};

const useInput = (validatorFn) => {
  const [inputState, dispatch] = useReducer(reducerFn, initialState);
  const enteredValueIsValid = validatorFn(inputState.value);
  const hasError = !enteredValueIsValid && inputState.istouched;

  const inputChangeHandler = (event) => {
    dispatch({
      type: "INPUT",
      value: event.target.value
    });
  };

  const inputBlurHandler = (event) => {
    dispatch({
      type: "BLUR",
      istouched: true
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
      istouched: false,
      value: ""
    });
  };

  return {
    value: inputState.value,
    isValid: enteredValueIsValid,
    error: hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
