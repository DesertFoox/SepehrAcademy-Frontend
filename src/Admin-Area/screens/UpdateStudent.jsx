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
import { Formik, Field, Form } from "formik";
import UpdateStudent from "../../Components/services/api/Admin-area/user/UpdateStudent.api";
import * as Yup from "yup";
import UserbyId from "../../Components/services/api/Admin-area/user/UserbyId.api";
const Home = (props) => {
  const [initialState, setinitialState] = useState({
    fullName: "",
    email: "",
    nationalId: "",
    phoneNumber: "",
    birthDate: "",
  });
  const Userinformations = async () => {
    const user = await UserbyId(props.match.params.id);
    setinitialState((state) => ({
      ...state,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      birthDate: user.birthDate
    }));
  };
  const formSchema = Yup.object().shape({
    fullName: Yup.string("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    email: Yup.string("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    phoneNumber: Yup.number("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    birthDate: Yup.string().required("این فیلد اجباریست"),
  });

  const UpdateStudents = async (data) => {
    const course = {
      fullName: data.fullName,
      email: data.email,
      birthDate: data.birthDate,
      phoneNumber: data.phoneNumber,
    };
    console.log(data)
    await UpdateStudent(course, props.match.params.id);
  };

  useEffect(() => {
    Userinformations();
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle> </CardTitle>
      </CardHeader>
      <CardBody>
        <Formik
          initialValues={initialState}
          enableReinitialize={true}
          validationSchema={formSchema}
          onSubmit={(value) => UpdateStudents(value)}
        >
          {({ errors, touched }) => (
            <Form>
              <FormGroup className="my-3">
                <Label for="fullName">نام کاربر</Label>
                <Field
                  name="fullName"
                  id="required"
                  className={`form-control ${errors.fullName && touched.fullName && "is-invalid"
                    }`}
                />
                {errors.fullName && touched.fullName ? (
                  <div className="invalid-tooltip mt-25">{errors.fullName}</div>
                ) : null}
              </FormGroup>
              <FormGroup className="my-3">
                <Label for="email">ایمیل</Label>
                <Field
                  type="email"
                  name="email"
                  id="cost"
                  className={`form-control ${errors.email && touched.email && "is-invalid"
                    }`}
                />
                {errors.email && touched.email ? (
                  <div className="invalid-tooltip mt-25">{errors.email}</div>
                ) : null}
              </FormGroup>
              <FormGroup className="my-3">
                <Label for="birthDate">تاریخ</Label>
                <Field
                  name="birthDate"
                  id="birthDate"
                  className={`form-control ${errors.nationalId && touched.birthDate && "is-invalid"
                    }`}
                />
                {errors.birthDate && touched.birthDate ? (
                  <div className="invalid-tooltip mt-25">{errors.birthDate}</div>
                ) : null}
              </FormGroup>
              <FormGroup className="my-3 ">
                <Label for="phoneNumber">شماره موبایل</Label>
                <Field
                  type="text"
                  name="phoneNumber"
                  id="capacity"
                  className={`form-control ${errors.phoneNumber && touched.phoneNumber && "is-invalid"
                    }`}
                />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div className="invalid-tooltip mt-25">{errors.phoneNumber}</div>
                ) : null}
              </FormGroup>
    
              <button className="btn btn-success" type="submit">ثبت</button>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
};

export default Home;
