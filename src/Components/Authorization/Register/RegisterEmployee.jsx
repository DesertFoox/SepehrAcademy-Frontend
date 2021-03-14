import React, { Fragment, useState } from "react";
import classes from "./css/register.module.css";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import "./css/mdb_reg.css";
import { MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBSelect } from "mdbreact";
import { ToastContainer } from "react-toastify";

import { EmployeeRegister } from "../../services/api/Auth/RegisterEmployee.api";
import { Form, Formik } from "formik";
import Forms from "../Form/Form";

const AdminRegister = () => {
  const yup = require("yup");
  require("yup-password")(yup);

  const Validate = yup.object().shape({
    fullName: yup
      .string()
      .min(2, "نام شما کوتاه است")
      .required("فیلد نام اجباریست لطفا آن را پر کنید"),
    PhoneNumber: yup
      .string("فرمت ورودی این فیلد باید عدد باشد")
      .required("این فیلد اجباریست لطفا آن را پر کنید")
      .min(9, "شماره باید 11 رقم باشد"),
    birthday: yup
      .string()
      .required("این فیلد اجباریست لطفا آن را پر کنید")
      .min(7, "تاریخ وارد شده شما اشتباه است")
      .max(10, "بیشتر از این نمیتوانید تاریخ راوارد کنید"),
    email: yup
      .string()
      .min(3)
      .email("فرمت ایمیلی که وارد کرده اید اشتباه است")
      .required("این فیلد اجباریست لطفا آن را پر کنید"),
    nationalId: yup
      .string("فرمت ورودی اشتباه اشت")
      .required("این فیلد اجباریست لطفا آن را پر کنید")
      .min(10, "کد ملی که وارد کردید اشتباه است"),
    password: yup
      .string()
      .password()
      .min(3, "رمز شما باید حدقال سه کارکتر داشته باشد")
      .required("این فیلد اجباریست لطفا آن را پر کنید"),
    address: yup
      .string()
      .min(3, "رمز شما باید حدقال سه کارکتر داشته باشد")
      .required("این فیلد اجباریست لطفا آن را پر کنید"),
    role: yup.string().required("این فیلد اجباریست لطفا آن را پر کنید"),
  });

  const regAdmin = async (data) => {
    const AdminRegister = {
      fullName: data.fullName,
      phoneNumber: data.PhoneNumber,
      birthDate: data.birthday,
      email: data.email,
      nationalId: data.nationalId,
      password: data.password,
      address: data.address,
      role: data.role,
    };
    const regstatus = await EmployeeRegister(AdminRegister);
    console.log(AdminRegister);
  };
  return (
    <Formik
      initialValues={{
        fullName: "",
        PhoneNumber: "",
        birthday: "",
        email: "",
        nationalId: "",
        password: "",
        address: "",
        role: "",
      }}
      validationSchema={Validate}
      enableReinitialize={true}
      onSubmit={(value) => regAdmin(value)}
    >
      {({ errors, handleChange, touched }) => {
        return (
          <Fragment>
            <ToastContainer />
            <div className={classes.shape1_holder}></div>

            <div className={classes.shape2_holder}></div>

            <Header />

            <div className="container ">
              <MDBRow>
                <div className="col mt-55">
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
                        {errors.fullName && touched.fullName && (
                          <h5
                            style={{ direction: "rtl" }}
                            className="redError mb-2"
                          >
                            {errors.fullName}!
                          </h5>
                        )}
                        <Forms
                          InputType="text"
                          labelText="شماره موبایل"
                          className="form-control w-75 ml-5 mb-4 usernameinput px-5"
                          InputName="PhoneNumber"
                          changeHandler={handleChange}
                          InputPlaceHolder="شماره موبایل خود را وارد کنید"
                        />
                        {errors.PhoneNumber && touched.PhoneNumber && (
                          <h5
                            style={{ direction: "rtl" }}
                            className="redError mb-2"
                          >
                            {errors.PhoneNumber}!
                          </h5>
                        )}
                        <Forms
                          InputType="email"
                          labelText="ایمیل"
                          className="form-control w-75 ml-5 mb-4 usernameinput px-5"
                          InputName="email"
                          changeHandler={handleChange}
                          InputPlaceHolder="ایمیل خود را وارد کنید"
                        />
                        {errors.email && touched.email && (
                          <h5
                            style={{ direction: "rtl" }}
                            className="redError mb-2"
                          >
                            {errors.email}!
                          </h5>
                        )}
                        <Forms
                          InputType="password"
                          labelText="رمز عبور"
                          className="form-control w-75 ml-5 mb-4 usernameinput px-5"
                          InputName="password"
                          changeHandler={handleChange}
                          InputPlaceHolder=" رمز عبور خود را وارد کنید"
                        />
                        {errors.password && touched.password && (
                          <h5
                            style={{ direction: "rtl" }}
                            className="redError mb-2"
                          >
                            {errors.password}!
                          </h5>
                        )}
                        <Forms
                          InputType="text"
                          labelText="کد ملی"
                          className="form-control w-75 ml-5 mb-4 usernameinput px-5"
                          InputName="nationalId"
                          changeHandler={handleChange}
                          InputPlaceHolder="  کد ملی خود را وارد کنید"
                        />
                        {errors.nationalId && touched.nationalId && (
                          <h5
                            style={{ direction: "rtl" }}
                            className="redError mb-2"
                          >
                            {errors.nationalId}!
                          </h5>
                        )}
                        <Forms
                          InputType="text"
                          labelText="سال تولد"
                          className="form-control w-75 ml-5 usernameinput px-5"
                          InputName="birthday"
                          changeHandler={handleChange}
                          InputPlaceHolder="   سال تولد خود را وارد کنید"
                        />
                        {errors.birthday && touched.birthday && (
                          <h5
                            style={{ direction: "rtl" }}
                            className="redError mb-2"
                          >
                            {errors.birthday}!
                          </h5>
                        )}
                        <Forms
                          InputType="text"
                          labelText=" آدرس "
                          className="form-control w-75 ml-5 usernameinput px-5"
                          InputName="address"
                          changeHandler={handleChange}
                          InputPlaceHolder="    آدرس خود را وارد کنید"
                        />
                        {errors.address && touched.address && (
                          <h5
                            style={{ direction: "rtl" }}
                            className="redError mb-2"
                          >
                            {errors.address}!
                          </h5>
                        )}
                        <Forms
                          InputType="text"
                          labelText=" وضعیت کاربر "
                          className="form-control w-75 ml-5 usernameinput px-5"
                          InputName="role"
                          changeHandler={handleChange}
                          InputPlaceHolder="    وضعیت خود را وارد کنید"
                        />
                        {errors.role && touched.role && (
                          <h5
                            style={{ direction: "rtl" }}
                            className="redError mb-2"
                          >
                            {errors.role}!
                          </h5>
                        )}
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
                          <Link className="link" to="/admin/login">
                            <MDBBtn rounded outline color="signInR">
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
  );
};

export default AdminRegister;
