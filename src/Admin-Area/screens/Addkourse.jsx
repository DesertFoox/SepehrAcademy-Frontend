import React, { useState } from "react";
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
import { MDBBadge } from "mdbreact";

import { Formik, Field, Form } from "formik";
import AddaKourse from "../../Components/services/api/Admin-area/kourses/addkourse.api";
import { useHistory } from "react-router-dom";

import * as Yup from "yup";
import { toast } from "react-toastify";

const AddKourse = () => {
  const [initialValues, setinitialValues] = useState({
    courseName: "",
    topics: [],
    description: "",
    image: "",
  });
  const formSchema = Yup.object().shape({
    courseName: Yup.string("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    topics: Yup.string("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    description: Yup.string()
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    image: Yup.string().required("این فیلد اجباریست"),
  });

  let history = useHistory();

  const AddNewKourse = async (data) => {
    const Kourse = {
      courseName: data.courseName,
      topics: initialValues.topics,
      description: data.description,
      image: data.image,
    };
    console.log(data)
    setinitialValues(Kourse);
    await AddaKourse(Kourse);
    // history.push("/admin/kourses");
  };
  const makebadge = (e, value) => {
    if (e.key === 'Enter' && initialValues.topics.length <= 4) {
      let new_topic = initialValues.topics
      new_topic.push(value)
      setinitialValues((old) => ({ ...old, topics: new_topic }))
    }
    else if (initialValues.topics.length > 4) {
      toast.error("محدودیت تاپیک فقط  5 تا است");
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle> پروفایل</CardTitle>
      </CardHeader>
      <CardBody>
        <Formik
          initialValues={initialValues}
          validationSchema={formSchema}
          onSubmit={(value) => AddNewKourse(value)}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="row">
                <div className="col-lg-6">
                  <FormGroup className="my-3">
                    <Label for="courseName">نام کورس</Label>
                    <Field
                      placeholder="دوره اموزش 0 تا 100 ری اکت"
                      name="courseName"
                      id="required"
                      className={`form-control ${errors.courseName && touched.courseName && "is-invalid"
                        }`}
                    />
                    {errors.courseName && touched.courseName ? (
                      <div className="invalid-tooltip mt-25">
                        {errors.courseName}
                      </div>
                    ) : null}
                  </FormGroup>
                </div>
                <div className="col-lg-6">
                  <FormGroup className="my-3">
                    <Label for="topics">تاپیک ها</Label>
                    <Field
                      placeholder="مثال:برنامه نویسی،گرافیک"
                      type="text"
                      name="topics"
                      id="cost"
                      onKeyPress={(event) => makebadge(event, event.target.value)}
                      className={`form-control ${errors.topics && touched.topics && "is-invalid"
                        }`}
                    />
                    {initialValues.topics.map(item => (
                      <MDBBadge className="ml-2" color="secondary">{item}</MDBBadge>
                    ))}
                    {errors.topics && touched.topics ? (
                      <div className="invalid-tooltip mt-25">
                        {errors.topics}
                      </div>
                    ) : null}
                  </FormGroup>

                </div>

                <div className="col-lg-6">
                  <FormGroup className="my-3">
                    <Label for="description">توضیحات</Label>
                    <Field
                      placeholder="توضیحات:سشیشسیسشییملیسش"
                      name="description"
                      id="endDate"
                      className={`form-control ${errors.description &&
                        touched.description &&
                        "is-invalid"
                        }`}
                    />
                    {errors.description && touched.description ? (
                      <div className="invalid-tooltip mt-25">
                        {errors.description}
                      </div>
                    ) : null}
                  </FormGroup>
                </div>
                <div className="col-lg-6">
                  <FormGroup className="my-3">
                    <Label for="image">عکس</Label>
                    <Field
                      placeholder="0000/00/00"
                      name="image"
                      type="file"
                      id="image"
                      className={`form-control ${errors.image && touched.image && "is-invalid"
                        }`}
                    />
                    {errors.image && touched.image ? (
                      <div className="invalid-tooltip mt-25">
                        {errors.image}
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

export default AddKourse;
