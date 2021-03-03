import React, { Component, Fragment } from "react";
import classes from "./css/register.module.css";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import "./css/mdb_reg.css";
import { MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import { RegisterUser } from "../../services/api/Auth/Register.api";
import { Form, Formik } from "formik";
import Forms from "../Form/Form";
const RegisterForm = () => {
  const yup = require("yup");
  require("yup-password")(yup);

  const Validate = yup.object().shape({
    fullName: yup
      .string()
      .min(2, "نام شما کوتاه است")
      .required("فیلد نام اجباریست لطفا آن را پر کنید"),
    PhoneNumber: yup
      .number("فرمت ورودی این فیلد باید عدد باشد")
      .required("این فیلد اجباریست لطفا آن را پر کنید")
      .min(11, "شماره باید 11 رقم باشد")
      .max(11, "شماره باید 11 رقم باشد"),
    birthday: yup
      .date()
      .required("این فیلد اجباریست لطفا آن را پر کنید")
      .min(7, "تاریخ وارد شده شما اشتباه است")
      .max(10, "بیشتر از این نمیتوانید تاریخ راوارد کنید"),
    email: yup
      .string()
      .min(3)
      .email("فرمت ایمیلی که وارد کرده اید اشتباه است")
      .required("این فیلد اجباریست لطفا آن را پر کنید"),
    nationalId: yup
      .number("فرمت ورودی اشتباه اشت")
      .required("این فیلد اجباریست لطفا آن را پر کنید")
      .max(9, "کد ملی که وارد کردید اشتباه است"),
    password: yup
      .string()
      .password()
      .lowercase(1, "رمز شما باید یک حروف موچک داشته باشد")
      .uppercase(1, "رمز شما باید یک حروف بزرگ داشته باشد")
      .min(3, "رمز شما باید حدقال سه کارکتر داشته باشد")
      .required("لطفا فیلد نام خانوادگی را پر کنید"),
  });

  const registerUser = async (data) => {
    const userRegister = {
      fullName: data.firstname,
      phoneNumber: data.PhoneNumber,
      birthDate: data.birthday,
      email: data.email,
      nationalId: data.nationalId,
      password: data.password,
    };
    const RegisterData = await RegisterUser(userRegister);
    this.setState({ RegisterData, isRegister: true });
  };
  return (
    <Fragment>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Validate}
        enableReinitialize={true}
        onSubmit={(value) => registerUser(value)}
      >
        {({ errors, handleChange, touched }) => {
          return (
            <Fragment>
              <div className={classes.shape1_holder}></div>

              <div className={classes.shape2_holder}></div>

              <Header />

              <div className="container ">
                <MDBRow>
                  <div className="col mt-55" >
                    <MDBCard className=" mx-auto  roundedform h-100 cards">
                      <MDBCardBody>
                        <Form>
                          <Forms
                            InputType="text"
                            labelText="نام و نام خانوادگی"
                            className="form-control w-75 ml-5 mb-4 usernameinput px-5"
                            InputName="fullName"
                            changeHandler={handleChange}
                            InputPlaceHolder="نام و نام خانوادگی خود را وارد کنید"
                          />
                          <Forms
                            InputType="number"
                            labelText="شماره موبایل"
                            className="form-control w-75 ml-5 mb-4 usernameinput px-5"
                            InputName="phoneNumber"
                            changeHandler={handleChange}
                            InputPlaceHolder="شماره موبایل خود را وارد کنید"
                          />
                          <Forms
                            InputType="email"
                            labelText="ایمیل"
                            className="form-control w-75 ml-5 mb-4 usernameinput px-5"
                            InputName="email"
                            changeHandler={handleChange}
                            InputPlaceHolder="ایمیل خود را وارد کنید"
                          />
                          <Forms
                            InputType="password"
                            labelText="رمز عبور"
                            className="form-control w-75 ml-5 mb-4 usernameinput px-5"
                            InputName="password"
                            changeHandler={handleChange}
                            InputPlaceHolder=" رمز عبور خود را وارد کنید"
                          />
                          <Forms
                            InputType="number"
                            labelText="کد ملی"
                            className="form-control w-75 ml-5 mb-4 usernameinput px-5"
                            InputName="nationalcode"
                            changeHandler={handleChange}
                            InputPlaceHolder="  کد ملی خود را وارد کنید"
                          />
                          <Forms
                            InputType="text"
                            labelText="سال تولد"
                            className="form-control w-75 ml-5 usernameinput px-5"
                            InputName="birthdate"
                            changeHandler={handleChange}
                            InputPlaceHolder="   سال تولد خود را وارد کنید"
                          />
                          <div className="text-center mt-3">
                            <div className="forgetPassR" dir="rtl">
                              <div className="exclamationR">
                                <input
                                  className="checkbosinput"
                                  type="checkbox"
                                />
                              </div>
                              مرا به خاطر بسپار
                            </div>
                            <MDBBtn
                              type="submit"
                              rounded
                              outline
                              color=" signUpR pl-4"
                            >
                              ثبت نام
                            </MDBBtn>
                            <Link className="link" to="/Login">
                              <MDBBtn rounded outline color=" signInR">
                                ورود
                              </MDBBtn>
                            </Link>
                          </div>
                        </Form>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                </MDBRow>
              </div>
            </Fragment>
          );
        }}
      </Formik>
    </Fragment>
  );
};

export default RegisterForm;
class Register extends Component {
  render() {
    return <div></div>;
  }
}
