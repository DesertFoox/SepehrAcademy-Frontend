import React, { Component } from "react";
import classes from "./css/forgetpass.module.css";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import "./css/mdb_for.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  toast,
  ToastContainer,
  MDBIcon,
} from "mdbreact";

class ForgetPass extends Component {
  state = {
    emailtext: "ایمیل",
  };

  submitHandler = (event) => {
    event.preventDefault();

    event.target.className += " was-validated";

    toast.error("یک فیلد خالی وجود دارد لطفا آن را پر کنید", {
      rtl: true,
      closeButton: true,
    });
  };

  render() {
    return (
      <div>
        <div className={classes.shape1_holder}></div>

        <div className={classes.shape2_holder}></div>

        <Header />
        <div className="container">
          <MDBRow>
            <MDBCol md="6 mx-auto md6F">
              <MDBCard className="roundedform cards">
                <MDBCardBody>
                  <form
                    className="needs-validation ml-1"
                    onSubmit={this.submitHandler}
                    noValidate
                  >
                    <p className="h4 text-right usernametext ">ایمیل</p>

                    <input
                      // placeholder="info@bahr.com"
                      // type="text"
                      // id="defaultFormCardNameEx"
                      // className="form-control w-75 ml-5 usernameinput px-5 my-3"
                      value={this.state.email}
                      onChange={this.changeHandler}
                      type="email"
                      id="defaultFormRegisterConfirmEx"
                      className="form-control w-75 ml-5 mb-4 usernameinput my-3 px-5"
                      name="email"
                      placeholder="ایمیل خود را وارد کنید"
                      required
                    />
                    <div className="invalid-feedback invalidfeedbackemail">
                      لطفا فیلد{this.state.emailtext} را پر کنید
                    </div>

                    <div className="text-center py-1 mt-1">
                      <MDBBtn
                        type="submit"
                        rounded
                        outline
                        color=" signUp pl-4"
                      >
                        بازیابی رمز
                      </MDBBtn>
                    </div>
                    <ToastContainer
                      position="top-right"
                      autoClose={5000}
                      newestOnTop={true}
                      rtl={true}
                    ></ToastContainer>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    );
  }
}

export default ForgetPass;
