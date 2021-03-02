import React, { createRef, Fragment, useRef } from "react";
import classes from "./css/login.module.css";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import "./css/mdb_log.css";
import "./css/mdb_res.css";
import { MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import { ToastContainer } from "react-toastify";

import { LogInUser } from "../../services/api/Auth/login.api";
import Forms from "../Form/Form";
import { Formik, Form } from "formik";
const Login = () => {
  const yup = require("yup");
  require("yup-password")(yup);

  const Validate = yup.object().shape({
    email: yup.string().min(3).email().required("لطفا فیلد نام را پر کنید"),
    password: yup.string().min(3).required("لطفا فیلد نام خانوادگی را پر کنید"),
  });

  //sending data to api
  const LoginUser = async (data) => {
    const users = {
      email: data.email,
      password: data.password,
    };
    const Logindata = await LogInUser(users);
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Validate}
      enableReinitialize={true}
      onSubmit={(value) => LoginUser(value)}
    >
      {({ errors, handleChange, touched }) => {
        return (
          <Fragment>
            <ToastContainer
            />

            <div className={classes.shape1_holder}></div>

            <div className={classes.shape2_holder}></div>

            <Header />

            <div className="container">
              <MDBRow>
                <MDBCol className="md6L" md="6">
                  <MDBCard className="roundedformL h-100 card">
                    <MDBCardBody>
                      <Form>
                        <Forms
                          InputType="email"
                          labelText="ایمیل یا نام کاربری"
                          className="form-control w-75 ml-5 mb-4 usernameinput px-5"
                          InputName="email"
                          changeHandler={handleChange}
                          InputPlaceHolder="ایمیل خود را وارد کنید"
                        />

                        {errors.email && touched.email && (
                          <p className="redError">{errors.email}!</p>
                        )}
                        <Forms
                          Inputvalue={Validate.password}
                          InputType="password"
                          labelText="رمزعبور"
                          className="form-control w-75 ml-5 mb-5 passwordinput px-5"
                          InputName="password"
                          changeHandler={handleChange}
                          InputPlaceHolder="حداقل 8 کاراکتر"
                        />
                        {errors.password && touched.password && (
                          <p className="redError">{errors.password}!</p>
                        )}
                        <div className="forgetPassL mt-2" dir="rtl">
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
                            type="submit"
                            rounded
                            outline
                            color=" signInL"
                          >
                            ورود
                          </MDBBtn>
                        </div>
                      </Form>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </div>
          </Fragment>
        );
      }}
    </Formik>
  );
};

export default Login;
