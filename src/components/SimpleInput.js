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
  const {
    enteredValue: enteredEmail,
    setEnteredValue: setEnteredEmail,
    setInputTouched: setEmailInputTouched,
    enteredValueIsValid: enteredEmailIsValid,
    inputValueIsInValid: emailInputIsInValid,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler
  } = useInput();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    setEnteredName("");
    setEnteredEmail("");
    setNameInputTouched(false);
    setEmailInputTouched(false);
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
        <CustomInput
          type="email"
          id="email"
          labelText="Your Email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          errorText="Email must not be empty"
          isInValid={emailInputIsInValid}
        />
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
