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
import UpdateBlog from "../../Components/services/api/Admin-area/blogs/updateblog.api";
import * as Yup from "yup";
import Eachblogs from "../../Components/services/api/Admin-area/blogs/eachBlog.api";
import { Fragment } from "react";
const Editblog = (props) => {
  const [initialState, setinitialState] = useState([
    {
      title: "",
      category: "",
      image: "",
      selectimage: "",
      text: "",
    },
  ]);
  const Bloginformation = async () => {
    const Blog = await Eachblogs(props.match.params.id);
    console.log(Blog.title);
    setinitialState((state) => ({
      ...state,
      title: Blog.title,
      category: Blog.category,
      image: Blog.image,
      text: Blog.text,
    }));
  };
  const formSchema = Yup.object().shape({
    title: Yup.string("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    category: Yup.string("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    image: Yup.string("فرمت وارد شده اشتباه است").required("این فیلد اجباریست"),
    text: Yup.string()
      .min(3, "متن نوشته شده کوتاه است")
      .required("این فیلد اجباریست"),
  });

  const UpdatetheBlog = async (data) => {
    const Blog = {
      title: data.title,
      category: data.category,
      image: data.selectimage,
      text: data.text,
    };
    await UpdateBlog(props.match.params.id, Blog);
  };

  useEffect(() => {
    Bloginformation();
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>تغییر بلاگ {initialState.title}</CardTitle>
      </CardHeader>
      <CardBody>
        <Formik
          initialValues={initialState}
          enableReinitialize={true}
          validationSchema={formSchema}
          onSubmit={(value) => UpdatetheBlog(value)}
        >
          {({ errors, touched }) => (
            <Form>
              <FormGroup className="my-3">
                <Label for="title">نام بلاگ</Label>
                <Field
                  name="title"
                  id="required"
                  className={`form-control ${
                    errors.title && touched.title && "is-invalid"
                  }`}
                />
                {errors.title && touched.title ? (
                  <div className="invalid-tooltip mt-25">{errors.title}</div>
                ) : null}
              </FormGroup>
              <FormGroup className="my-3">
                <Label for="category">کتگوری</Label>
                <Field
                  type="text"
                  name="category"
                  id="cost"
                  className={`form-control ${
                    errors.category && touched.category && "is-invalid"
                  }`}
                />
                {errors.category && touched.category ? (
                  <div className="invalid-tooltip mt-25">{errors.category}</div>
                ) : null}
              </FormGroup>
              <FormGroup className="my-3">
                <Label for="text">توضیحات</Label>
                <Field
                  name="text"
                  id="category"
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
                <Label for="image"> نام عکس</Label>
                <Field
                  type="text"
                  name="image"
                  id="image"
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
              <FormGroup className="my-3">
                <Label for="selectimage"> انتخاب عکس</Label>
                <Field
                  type="file"
                  name="selectimage"
                  id="image"
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

export default Editblog;
