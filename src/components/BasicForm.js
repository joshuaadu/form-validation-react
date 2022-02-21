import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";

import CustomInput from "./CustomInput";
import useInput from "./hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    error: firstNameError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    error: lastNameError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    error: emailError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput(isEmail);

  const queryClient = useQueryClient();
  const mutation = useMutation(
    async (contact) => {
      const response = await fetch(
        "https://react-form-fd387-default-rtdb.firebaseio.com/contact-list.json",
        {
          method: "POST",
          body: JSON.stringify(contact),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const data = await response.json();
      const key = data.name;
      console.log(key);
      queryClient.setQueryData("contacts", (oldData) =>
        Object.assign({ key: contact }, oldData)
      );

      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("contacts");
        console.log("Contact submitted!", mutation.data);
        firstNameReset("");
        lastNameReset("");
        emailReset("");
      },
      onError: () => {
        console.log("Failed to submit!");
      }
    }
  );

  const formIsValid = emailIsValid && firstNameIsValid && lastNameIsValid;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    const newContact = {
      name: `${firstNameValue} ${lastNameValue}`,
      email: emailValue
    };
    mutation.mutate(newContact);
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
      {mutation.isLoading && <div>Submitting form!</div>}
    </form>
  );
};

export default BasicForm;
