import CustomInput from "./CustomInput";
import useInput from "./hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    error: firstNameError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    error: lastNameError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    error: emailError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput((value) => value.includes("@"));

  const formIsValid = emailIsValid && firstNameIsValid && lastNameIsValid;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    firstNameReset("");
    lastNameReset("");
    emailReset("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={`form-control ${firstNameError ? "invalid" : ""}`}>
          <CustomInput
            type="text"
            id="firstName"
            labelText="First Name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            errorText="First Name must not be empty"
            error={firstNameError}
          />
        </div>
        <div className={`form-control ${lastNameError ? "invalid" : ""}`}>
          <CustomInput
            type="text"
            id="lastName"
            labelText="Last Name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            errorText="Last Name must not be empty"
            error={lastNameError}
          />
        </div>
        <div className={`form-control ${emailError ? "invalid" : ""}`}>
          <CustomInput
            type="email"
            id="email"
            labelText="E-Mail Address"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            errorText="Email must not be in the format abc@xyz.com"
            error={emailError}
          />
        </div>
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
