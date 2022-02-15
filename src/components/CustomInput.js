import { Fragment } from "react";

const CustomInput = (props) => {
  return (
    <Fragment>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        type={props.type ? props.type : "text"}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.isInValid && <p className="error-text">{props.errorText}</p>}
    </Fragment>
  );
};

export default CustomInput;
