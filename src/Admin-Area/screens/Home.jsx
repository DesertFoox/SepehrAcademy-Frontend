import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Button,
  Label,
  Col,
} from "reactstrap";
import { MDBIcon, MDBBtn } from "mdbreact";
import { getUserInformation } from "../../Components/services/storage/storage";
import { Formik, Field, Form } from "formik";
import UpdateinfAdmin from "../../Components/services/api/Admin-area/auth/profilex.api";

import * as Yup from "yup";
import EditprofForm from "../../Components/Authorization/Form/Form";
const Home = (props) => {
  const [initialState, setinitialState] = useState({
    userName: "",
    email: "",
    nationalid: "",
    date: "",
    number: "",
  });
  const Validate = Yup.object().shape({
    userName: Yup.string().min(3).required("لطفا فیلد نام را پر کنید"),
    date: Yup.string()
      .min(4, "سال تولد شما باید حدقال سه کارکتر داشته باشد")
      .required("لطفا فیلد نام خانوادگی را پر کنید"),
    email: Yup.string()
      .min(3, "رمز شما باید حدقال سه کارکتر داشته باشد")
      .required("لطفا فیلد نام خانوادگی را پر کنید"),
    nationalid: Yup.string()
      .min(3, "کد ملی شما باید حدقال سه کارکتر داشته باشد")
      .required("لطفا فیلد کد ملی را پر کنید"),
    number: Yup.string()
      .min(3, "کد ملی شما باید حدقال سه کارکتر داشته باشد")
      .required("لطفا فیلد کد ملی را پر کنید"),
  });

  const UserInformation = async () => {
    let user = await JSON.parse(getUserInformation("userinf"));
    setinitialState((state) => ({
      ...state,
      userName: user.fullName,
      email: user.email,
      date: user.birthDate,
      nationalid: user.nationalId,
      number: user.phoneNumber,
    }));
  };

  const LoginUser = async (data, error) => {
    const users = {
      email: data.email,
      birthDate: data.date,
      fullName: data.userName,
      nationalId: data.nationalid,
      phoneNumber: data.number,
    };

    const Logindata = await UpdateinfAdmin(users, props.match.params.id);
    
  };
  useEffect(() => {
    UserInformation();
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle> Validation</CardTitle>
      </CardHeader>
      <CardBody>
        <Formik
          initialValues={initialState}
          validationSchema={Validate}
          enableReinitialize={true}
          onSubmit={(value) => LoginUser(value)}
        >
          {({ values, errors, handleChange, touched }) => (
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
                    <h5 style={{ direction: "rtl" }} className="redError mb-2">
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
                    <h5 style={{ direction: "rtl" }} className="redError mb-2">
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
                    <h5 style={{ direction: "rtl" }} className="redError mb-2">
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
                    <h5 style={{ direction: "rtl" }} className="redError mb-2">
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
                    <h5 style={{ direction: "rtl" }} className="redError mb-2">
                      {errors.date}!
                    </h5>
                  )}
                </div>
              </div>
              <div className="s">
                <MDBBtn outline color="secondary" className="btn-md font bigg">
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
          )}
        </Formik>
      </CardBody>
    </Card>
  );
};

export default Home;
