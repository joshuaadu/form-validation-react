import CustomInput from "./CustomInput";
import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    error: nameError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset
  } = useInput((value) => value.trim() !== "");
  const {
    value: emailValue,
    isValid: emailIsValid,
    error: emailError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput((value) => value.includes("@"));

  const formIsValid = emailIsValid && nameIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    nameReset();
    emailReset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${nameError ? "invalid" : ""}`}>
        <CustomInput
          type="text"
          id="name"
          labelText="Your Name"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          errorText="Name must not be empty"
          error={nameError}
        />
      </div>
      <div className={`form-control ${emailError ? "invalid" : ""}`}>
        <CustomInput
          type="email"
          id="email"
          labelText="Your Email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          errorText="Email must not be in the format abc@xyz.com"
          error={emailError}
        />
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
