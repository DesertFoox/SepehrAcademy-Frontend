import React, { useState,useEffect } from "react";
import { MDBIcon, MDBBtn } from "mdbreact";

//styles
import "../css/Courses.css";
import "../css/dash.css";
import "../css/Courses.css";
import EditprofForm from "./form/EditprofileForm copy";

import { Formik, Form } from "formik";

//api
import UserDash from "../../Components/services/api/user/userdash.api";
import Updateinf from '../../Components/services/api/user/updateinf.api'
//storege
import { clearStorage, getUserInformation } from "../../Components/services/storage/storage";


const Editprofile = (props) => {

  const [initialState, setinitialState] = useState({
    userName: "",
    email: "",
    nationalid: "",
    date:''
  });
console.log(initialState)
  const UserInformation = async () => {
    let user = await JSON.parse(getUserInformation("userinf"));
    console.log(user)
    setinitialState((state) => ({
      ...state,
      userName: user.fullName,
      email: user.email,
      date: user.birthDate,
      nationalid: user.nationalId,
      number: user.phoneNumber,
    }));
  };
  useEffect(() => {
    UserInformation();
  }, []);
  console.log(initialState);

  const yup = require("yup");
  require("yup-password")(yup);

  const Validate = yup.object().shape({
    userName: yup.string().min(3).required("لطفا فیلد نام را پر کنید"),
    date: yup
      .string()
      .min(4, "سال تولد شما باید حدقال سه کارکتر داشته باشد")
      .required("لطفا فیلد نام خانوادگی را پر کنید"),
    email: yup
      .string()
      .min(3, "رمز شما باید حدقال سه کارکتر داشته باشد")
      .required("لطفا فیلد نام خانوادگی را پر کنید"),
    nationalid: yup
      .string()
      .min(3, "کد ملی شما باید حدقال سه کارکتر داشته باشد")
      .required("لطفا فیلد کد ملی را پر کنید"),
    number: yup
      .string()
      .min(3, "کد ملی شما باید حدقال سه کارکتر داشته باشد")
      .required("لطفا فیلد کد ملی را پر کنید"),
  });

  const LoginUser = async (data, error) => {
    const users = {
      email: data.email,
      birthDate: data.date,
      fullName: data.userName,
      nationalId: data.nationalid,
      phoneNumber: data.number,
    };

    const Logindata = await Updateinf(users,props.id);
  };
    
  return (
    <Formik
      initialValues={initialState}
      validationSchema={Validate}
      enableReinitialize={true}
      onSubmit={(value) => LoginUser(value)}
    >
      {({values, errors, handleChange, touched }) => {
        return (
          <div className="row">
            <div className="col-lg-12 px-0">
              <div className="bg-image">
                <img
                  src={
                    require("../../Assets/images/woman-holding-her-head-3280131@2x.png")
                      .default
                  }
                  className="img-fluid imgheight"
                  alt="Sample"
                />
                <div className="mask blackbge">
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <input id="chngeimg" type="file" />
                    <label className="getimg" htmlFor="chngeimg"></label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 mt-4 w-75 mx-auto rtl">
              <Form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <EditprofForm
                      name="userName"
                      type="text"
                      id="defaultFormRegisterNameEx"
                      classnames="form-control changeinput"
                      label="نام و نام خانوادگی"
                      placeholder="نام و نام خانوادگی"
                      required="required"
                      onChange={handleChange}
                    />

                    {errors.userName && touched.userName && (
                      <h5
                        style={{ direction: "rtl" }}
                        className="redError mb-2"
                      >
                        {errors.userName}!
                      </h5>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <EditprofForm
                      name="email"
                      type="email"
                      id="defaultFormRegisterLNameEx"
                      classnames="form-control changeinput"
                      placeholder="ایمیل"
                      label="ایمیل"
                      onChange={handleChange}
                    />
                    {errors.email && touched.email && (
                      <h5
                        style={{ direction: "rtl" }}
                        className="redError mb-2"
                      >
                        {errors.email}!
                      </h5>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <EditprofForm
                      name="nationalid"
                      type="text"
                      id="defaultFormRegisterEmailEx"
                      classnames="form-control changeinput"
                      placeholder="کد ملی"
                      label="کد ملی"
                      onChange={handleChange}
                    />
                    {errors.nationalid && touched.nationalid && (
                      <h5
                        style={{ direction: "rtl" }}
                        className="redError mb-2"
                      >
                        {errors.nationalid}!
                      </h5>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <EditprofForm
                      name="date"
                      type="text"
                      id="defaultFormRegisterdateEx"
                      classnames="form-control changeinput"
                      label="تاریخ تولد"
                      placeholder="تاریخ تولد"
                      onChange={handleChange}
                    />
                    {errors.date && touched.date && (
                      <h5
                        style={{ direction: "rtl" }}
                        className="redError mb-2"
                      >
                        {errors.date}!
                      </h5>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <EditprofForm
                      name="number"
                      type="text"
                      id="defaultFormRegisterdateEx"
                      classnames="form-control changeinput"
                      label="شماره"
                      placeholder="شماره"
                      onChange={handleChange}
                    />
                    {errors.date && touched.date && (
                      <h5
                        style={{ direction: "rtl" }}
                        className="redError mb-2"
                      >
                        {errors.date}!
                      </h5>
                    )}
                  </div>
                </div>
                <div className="s">
                  <MDBBtn
                    outline
                    color="secondary"
                    className="btn-md font bigg"
                  >
                    لغو
                    <MDBIcon far icon="window-close" brand className="pr-1" />
                  </MDBBtn>
                  <MDBBtn
                    gradient="purple"
                    className="btn-md font bigg"
                    type="submit"
                  >
                    ثبت تغییرات
                    <MDBIcon far icon="check-square" brand className="pr-1" />
                  </MDBBtn>
                </div>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Editprofile;
