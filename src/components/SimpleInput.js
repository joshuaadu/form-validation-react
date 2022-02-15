import { useEffect, useRef, useState } from "react";
import CustomInput from "./CustomInput";
import useInput from "./hooks/use-input";
const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    setEnteredValue: setEnteredName,
    setInputTouched: setNameInputTouched,
    enteredValueIsValid: enteredNameIsValid,
    inputValueIsInValid: nameInputIsInValid,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler
  } = useInput();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
    setEnteredName("");
    setNameInputTouched(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${nameInputIsInValid ? "invalid" : ""}`}>
        <CustomInput
          type="text"
          id="name"
          labelText="Your Name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          errorText="Name must not be empty"
          isInValid={nameInputIsInValid}
        />
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
