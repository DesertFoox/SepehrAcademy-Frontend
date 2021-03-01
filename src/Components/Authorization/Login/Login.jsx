import React, { Component } from "react";
import classes from "./css/login.module.css";
import { Link ,Redirect} from "react-router-dom";
import Header from "../../Header/Header";
import "./css/mdb_log.css";
import "./css/mdb_res.css";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  ToastContainer,
} from "mdbreact";
import { LogInUser } from "../../services/api/Auth/login.api";
import { getItem } from "../../services/storage/storage";
class Login extends Component {
  state = {
    email: "",
    password: "",
    igLoggedin: false,
  };

  loginUser = async () => {
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    const Logindata = await LogInUser(user);
    console.log(Logindata);
    this.setState({ user: Logindata, igLoggedin: true });
  };
  submitHandler = (event) => {
    event.preventDefault();

    event.target.className += " was-validated";
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { loginUser } = this;
    return (
      <React.Fragment>
        <div className={classes.shape1_holder}></div>

        <div className={classes.shape2_holder}></div>

        <Header />

        <div className="container">
          <MDBRow>
            <MDBCol className="md6L" md="6">
              <MDBCard className="roundedformL h-100 card">
                <MDBCardBody>
                  <form
                    className="needs-validation ml-1"
                    onSubmit={this.submitHandler}
                    noValidate
                  >
                    <p className="h4 text-right usernametext ">
                      ایمیل یا نام کاربری
                    </p>

                    <input
                      value={this.state.email}
                      onChange={this.changeHandler}
                      type="email"
                      id="defaultFormRegisterConfirmEx"
                      className="form-control w-75 ml-5 mb-4 usernameinput px-5"
                      name="email"
                      placeholder="ایمیل خود را وارد کنید"
                      required
                    />
                    <div className="invalid-feedback invalidfeedbackemail">
                      لطفا فیلد ایمیل را پر کنید{" "}
                    </div>

                    <p className="h4 text-right usernametext">رمزعبور</p>

                    <input
                      value={this.state.password}
                      onChange={this.changeHandler}
                      type="password"
                      id="defaultFormRegisterConfirmEx2"
                      className="form-control w-75 ml-5 mb-5 passwordinput px-5"
                      name="password"
                      placeholder="حداقل 8 کاراکتر"
                      required
                    />
                    <div className="invalid-feedback invalidfeedbackpassL">
                      لطفا فیلد رمز عبور را پر کنید{" "}
                    </div>
                    <div className="forgetPassL mt-2" dir="rtl">
                      {" "}
                      <div className="exclamation"></div>
                      <Link to="/Forgetpass">رمزم رو فراموش کردم!</Link>
                    </div>
                    <div className="text-center py-4 mt-1">
                      <Link to="/Register">
                        <MDBBtn rounded outline color=" signUpL pl-4">
                          ثبت نام
                        </MDBBtn>
                      </Link>
                      <MDBBtn
                        onClick={loginUser}
                        type="submit"
                        rounded
                        outline
                        color=" signInL"
                      >
                        ورود
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
      </React.Fragment>
    );
  }
}

export default Login;
