import React from "react";
import classes from "./css/forgetpass.module.css";
import Header from "../../Header/Header";
import Forms from "../Form/Form.jsx";
import "./css/mdb_for.css";
import { MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import { Formik, Form } from "formik";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";
import { forgetPass } from "../../services/api/Auth/ForgetPass.api";

const ForgetPass = () => {
  const Validate = yup.object().shape({
    email: yup
      .string()
      .min(3)
      .email("فرمت ایمیلی که وارد کرده اید اشتباه است")
      .required("لطفا فیلد نام را پر کنید"),
  });

  const ForgetPas = async (data) => {
    const UserForget = {
      email: data.email,
    };
    await forgetPass(UserForget);
  };
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={Validate}
      enableReinitialize={true}
      onSubmit={(value) => ForgetPas(value)}
    >
      {({ errors, handleChange, touched }) => {
        return (
          <Fragment>
            <ToastContainer />

            <div className={classes.shape1_holder}></div>

            <div className={classes.shape2_holder}></div>

            <Header />
            <div className="container">
              <MDBRow>
                <MDBCol md="6 mx-auto md6F">
                  <MDBCard className="roundedform cards">
                    <MDBCardBody>
                      <Form>
                        {" "}
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

export default ForgetPass;
