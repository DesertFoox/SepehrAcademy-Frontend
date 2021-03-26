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
import { useHistory } from "react-router-dom";
import Addblog from "../../Components/services/api/Admin-area/blogs/addBlog.api";
import * as Yup from "yup";

const AddBlog = () => {
  const [Category, setCategory] = useState([]);

  const formSchema = Yup.object().shape({
    title: Yup.string("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    category: Yup.string("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    text: Yup.string()
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
  });

  let history = useHistory();

  const AddNewBlog = async (data) => {
    const Blog = {
      title: data.title,
      category: data.category,
      image: data.image,
      text: data.text,
    };
    await Addblog(Blog);
    history.push("/admin/blogs");
  };

  useEffect(() => {}, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle> پروفایل</CardTitle>
      </CardHeader>
      <CardBody>
        <Formik
          initialValues={{
            title: "",
            category: "",
            image: "",
            text: "",
          }}
          validationSchema={formSchema}
          onSubmit={(value) => AddNewBlog(value)}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <div className="row">
                <div className="col-lg-6">
                  <FormGroup className="my-3">
                    <Label for="title">نام بلاگ</Label>
                    <Field
                      placeholder="نام بلاگ شما"
                      name="title"
                      id="required"
                      className={`form-control ${
                        errors.title && touched.title && "is-invalid"
                      }`}
                    />
                    {errors.title && touched.title ? (
                      <div className="invalid-tooltip mt-25">
                        {errors.title}
                      </div>
                    ) : null}
                  </FormGroup>
                </div>
                <div className="col-lg-6">
                  <FormGroup className="my-3">
                    <Label for="text">نوشته شما</Label>
                    <Field
                      name="text"
                      id="endDate"
                      className={`form-control ${
                        errors.text && touched.text && "is-invalid"
                      }`}
                    />
                    {errors.text && touched.text ? (
                      <div className="invalid-tooltip mt-25">
                        {errors.text}
                      </div>
                    ) : null}
                  </FormGroup>
                </div>
                <div className="col-lg-6">
                  <FormGroup className="my-3">
                    <Label for="image">عکس</Label>
                    <Field
                      name="image"
                      id="startDate"
                      type="file"
                      className={`form-control ${
                        errors.image && touched.image && "is-invalid"
                      }`}
                    />
                    {errors.image && touched.image ? (
                      <div className="invalid-tooltip mt-25">
                        {errors.image}
                      </div>
                    ) : null}
                  </FormGroup>
                </div>
                <div className="col-lg-6">
                  <FormGroup className="my-3">
                    <Label for="category">کتگوری </Label>
                    <select
                      name="category"
                      id="teacher"
                      onChange={(event) =>
                        setFieldValue("category", event.target.value)
                      }
                      className={`form-control ${
                        errors.category && touched.category && "is-invalid"
                      }`}
                    >
                      <option value="خبری">خبری</option>
                      <option value="اموزشی">اموزشی</option>
                      <option value="فوری">فوری</option>
                    </select>
                    {errors.category && touched.category ? (
                      <div className="invalid-tooltip mt-25">
                        {errors.category}
                      </div>
                    ) : null}
                  </FormGroup>
                </div>
              </div>

              <Col sm="12" className="text-center">
                <Button className="mt-3" color="success" type="submit">
                  ساخت
                </Button>
              </Col>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
};

export default AddBlog;
