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
import Updatekourse from "../../Components/services/api/Admin-area/kourses/updatekourse.api";
import * as Yup from "yup";
import Eachkourse from "../../Components/services/api/Admin-area/kourses/Eachkourse.api";

import { Fragment } from "react";
const Home = (props) => {
  const [initialState, setinitialState] = useState([
    {
      image: "",
      courseName: "",
      _id: "",
      startDate: "",
      description: "",
      terms: "",
      topics: "",
    },
  ]);
  const ConvertDateHandler = (date) => {
    const dateObj = new Date(date);

    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    let newdate = year + "/" + month + "/" + day;
    return newdate;
  };
  const CourseInformation = async () => {
    const kourse = await Eachkourse(props.match.params.id);
    setinitialState((state) => ({
      ...state,
      image: kourse.image,
      courseName: kourse.courseName,
      _id: kourse._id,
      startDate: ConvertDateHandler(kourse.createDate),
      description: kourse.description,
      terms: kourse.terms,
      topics: kourse.topics,
    }));
  };
  const formSchema = Yup.object().shape({
    image: Yup.string("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    courseName: Yup.string("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    _id: Yup.string()
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    startDate: Yup.string()
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    description: Yup.number("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    terms: Yup.string().required("این فیلد اجباریست"),
  });

  const UpdateKourse = async (data) => {
    const course = {
      courseName: data.courseName,
      _id: data._id,
      startDate: data.createDate,
      description: data.description,
      terms: data.terms.length,
      topics: data.topics,
    };
    await Updatekourse(props.match.params.id , course);
  };

  useEffect(() => {
    CourseInformation();
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>تغییر دوره {initialState.title}</CardTitle>
      </CardHeader>
      <CardBody>
        <Formik
          initialValues={initialState}
          enableReinitialize={true}
          validationSchema={formSchema}
          onSubmit={(value) => UpdateKourse(value)}
        >
          {({ errors, touched }) => (
            <Form>
              <FormGroup className="my-3">
                <Label for="courseName">نام کورس</Label>
                <Field
                  name="courseName"
                  id="required"
                  className={`form-control ${
                    errors.courseName && touched.courseName && "is-invalid"
                  }`}
                />
                {errors.courseName && touched.courseName ? (
                  <div className="invalid-tooltip mt-25">
                    {errors.courseName}
                  </div>
                ) : null}
              </FormGroup>
              <FormGroup className="my-3">
                <Label for="_id">ایدی</Label>
                <Field
                  type="text"
                  name="_id"
                  id="cost"
                  className={`form-control ${
                    errors._id && touched._id && "is-invalid"
                  }`}
                />
                {errors._id && touched._id ? (
                  <div className="invalid-tooltip mt-25">{errors._id}</div>
                ) : null}
              </FormGroup>
              <FormGroup className="my-3">
                <Label for="description">توضیحات</Label>
                <Field
                  name="description"
                  id="description"
                  className={`form-control ${
                    errors.description && touched.description && "is-invalid"
                  }`}
                />
                {errors.description && touched.description ? (
                  <div className="invalid-tooltip mt-25">
                    {errors.description}
                  </div>
                ) : null}
              </FormGroup>
              <FormGroup className="my-3">
                <Label for="startDate">تاریخ شروع</Label>
                <Field
                  name="startDate"
                  id="startDate"
                  className={`form-control ${
                    errors.startDate && touched.startDate && "is-invalid"
                  }`}
                />
                {errors.startDate && touched.startDate ? (
                  <div className="invalid-tooltip mt-25">
                    {errors.startDate}
                  </div>
                ) : null}
              </FormGroup>
              <FormGroup className="my-3 ">
                <Label for="topics">تاپیک</Label>
                <Field
                  type="text"
                  name="topics"
                  id="capacity"
                  className={`form-control ${
                    errors.topics && touched.topics && "is-invalid"
                  }`}
                />
                {errors.topics && touched.topics ? (
                  <div className="invalid-tooltip mt-25">{errors.topics}</div>
                ) : null}
              </FormGroup>
              <FormGroup className="my-3">
                <Label for="terms">ترم ها</Label>

                <select
                  name="terms"
                  style={{ height: "3em" }}
                  className={`form-control form-control-sm ${
                    errors.terms && touched.terms && "is-invalid"
                  }`}
                ></select>
                {errors.terms && touched.terms ? (
                  <div className="invalid-tooltip mt-25">{errors.terms}</div>
                ) : null}
              </FormGroup>
              <button className="btn btn-success" type="submit">
                ثبت
              </button>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
};

export default Home;
