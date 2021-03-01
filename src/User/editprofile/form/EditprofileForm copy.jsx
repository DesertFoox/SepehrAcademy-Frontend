import React, { Component, useState } from "react";
import {

  ToastContainer,
} from "mdbreact";

class EditprofileForm extends Component {
  render() {
    const {
      name,
      type,
      id,
      classnames,
      placeholder,
      label,
      value,
      onChange,
      required,
    } = this.props;
    return (
      <React.Fragment>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text inputp">
          {label}
        </label>
        <input
          value={value}
          onChange={onChange}
          name={name}
          type={type}
          id={id}
          className={this.props.classnames}
          placeholder={placeholder}
          required={required}
        />
        <div className="invalid-feedback">
       لطفا فیلد {placeholder} را پر کنید
        </div>

    
      </React.Fragment>
    );
  }
}

export default EditprofileForm;
