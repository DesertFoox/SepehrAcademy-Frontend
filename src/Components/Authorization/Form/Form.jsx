import { Form } from "formik";
import React, { Component } from "react";

class AuthForm extends Component {
  render() {
    const {
      labelText,
      Inputvalue,
      InputType,
      className,
      InputName,
      InputPlaceHolder,
      changeHandler,
    } = this.props;

    return (
      <React.Fragment>
        <p className="h4 text-right usernametext ">{labelText}</p>
        <input
          value={Inputvalue}
          onChange={changeHandler}
          type={InputType}
          id="defaultFormLoginConfirmEx"
          className={className}
          name={InputName}
          placeholder={InputPlaceHolder}
          required
        />
      </React.Fragment>
    );
  }
}

export default AuthForm;
