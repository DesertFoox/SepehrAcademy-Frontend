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
import UpdateCourses from "../../Components/services/api/Admin-area/Courses/UpdateCourse.api";
import * as Yup from "yup";
import EachTerm from "../../Components/services/api/course/eachTerm.api";
import GetTeachers from "../../Components/services/api/course/term.api";
import { Fragment } from "react";
import getTerms from "../../Components/services/api/course/term.api";
import getKourses from "../../Components/services/api/Admin-area/kourses/kourses.api";
import { useHistory } from "react-router";
const UpdateCourse = (props) => {
  const [initialState, setinitialState] = useState([
    {
      title: "",
      cost: "",
      endDate: "",
      startDate: "",
      capacity: "",
      teacher: "",
      course: "",
      teacher_id: "",
    },
  ]);
  const ConvertDateHandler = (date) => {
    const dateObj = new Date(date);

    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    let newdate = day + "/" + month + "/" + year;
    return newdate;
  };

  const [Teachers, setTeacher] = useState([]);
  const [kourse, setKourse] = useState([]);

  const GetTeachers = async () => {
    const Teache = await getTerms();
    setTeacher(Teache);
  };

  const Getcourses = async () => {
    const Kours = await getKourses();
    setKourse(Kours);
  };


  const CourseInformation = async () => {
    const user = await EachTerm(props.match.params.id);
    setinitialState((state) => ({
      ...state,
      title: user.title,
      cost: user.cost,
      endDate: ConvertDateHandler(user.endDate),
      startDate: ConvertDateHandler(user.startDate),
      capacity: user.capacity,
      teacher: user.teacher.fullName,
      teacher_id: user.teacher._id,
      course: user.course.courseName,
    }));
  };
  const formSchema = Yup.object().shape({
    title: Yup.string("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    cost: Yup.number("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    endDate: Yup.string()
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    startDate: Yup.string()
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    capacity: Yup.number("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    teacher: Yup.string().required("این فیلد اجباریست"),
    course: Yup.string("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
  });
  let history = useHistory();
  const UpdateCourse = async (data) => {
    const course = {
      title: data.title,
      cost: data.cost,
      endDate: data.endDate,
      startDate: data.startDate,
      capacity: data.capacity,
      teacher: data.teacher,
      course: data.course,
    };
    await UpdateCourses(course, props.match.params.id);
    history.push('/admin/courses');
  };

  useEffect(() => {
    CourseInformation();
    GetTeachers();
    Getcourses();
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
          onSubmit={(value) => UpdateCourse(value)}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <div className="row">
                <div className="col-lg-6">
                  <FormGroup className="my-3">
                    <Label for="title">نام دوره</Label>
                    <Field
                      name="title"
                      id="required"
                      className={`form-control ${errors.title && touched.title && "is-invalid"
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
                    <Label for="cost">قیمت</Label>
                    <Field
                      type="text"
                      name="cost"
                      id="cost"
                      className={`form-control ${errors.cost && touched.cost && "is-invalid"
                        }`}
                    />
                    {errors.cost && touched.cost ? (
                      <div className="invalid-tooltip mt-25">{errors.cost}</div>
                    ) : null}
                  </FormGroup>
                </div>
                <div className="col-lg-6">
                  <FormGroup className="my-3">
                    <Label for="url">تاریخ پایان</Label>
                    <Field
                      name="endDate"
                      id="endDate"
                      className={`form-control ${errors.endDate && touched.endDate && "is-invalid"
                        }`}
                    />
                    {errors.url && touched.url ? (
                      <div className="invalid-tooltip mt-25">
                        {errors.endDate}
                      </div>
                    ) : null}
                  </FormGroup>
                </div>{" "}
                <div className="col-lg-6">
                  <FormGroup className="my-3">
                    <Label for="startDate">شروع دوره</Label>
                    <Field
                      name="startDate"
                      id="startDate"
                      className={`form-control ${errors.startDate && touched.startDate && "is-invalid"
                        }`}
                    />
                    {errors.startDate && touched.startDate ? (
                      <div className="invalid-tooltip mt-25">
                        {errors.startDate}
                      </div>
                    ) : null}
                  </FormGroup>
                </div>{" "}
                <div className="col-lg-6">
                  <FormGroup className="my-3 ">
                    <Label for="date">ظرفیت</Label>
                    <Field
                      type="text"
                      name="capacity"
                      id="capacity"
                      className={`form-control ${errors.capacity && touched.capacity && "is-invalid"
                        }`}
                    />
                    {errors.capacity && touched.capacity ? (
                      <div className="invalid-tooltip mt-25">
                        {errors.capacity}
                      </div>
                    ) : null}
                  </FormGroup>
                </div>
                <div className="col-lg-6">
                  <FormGroup className="my-3">
                    <Label for="teacher">نام استاد</Label>
                    <select
                      name="teacher"
                      id="teacher"
                      onChange={(event) =>
                        setFieldValue("teacher", event.target.value)
                      }
                      className={`form-control ${errors.teacher && touched.teacher && "is-invalid"
                        }`}
                    >
                      {Teachers.map((item) => (
                        <option value={item.teacher._id}>
                          {item.teacher.fullName}
                        </option>
                      ))}
                    </select>
                    {errors.teacher && touched.teacher ? (
                      <div className="invalid-tooltip mt-25">
                        {errors.teacher}
                      </div>
                    ) : null}
                  </FormGroup>
                </div>
                <div className="col-lg-6">
                  <FormGroup className="my-3">
                    <Label for="course">نام کورس</Label>
                    <select
                      name="course"
                      id="course"
                      onChange={(event) =>
                        setFieldValue("course", event.target.value)
                      }
                      className={`form-control ${errors.course && touched.course && "is-invalid"
                        }`}
                    >
                      {kourse.map((item) => (
                        <option value={item._id}>{item.courseName}</option>
                      ))}
                    </select>
                    {errors.course && touched.course ? (
                      <div className="invalid-tooltip mt-25">
                        {errors.course}
                      </div>
                    ) : null}
                  </FormGroup>
                </div>
              </div>

              {Teachers.map((teacher) => console.log(teacher.teacher))}
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

export default UpdateCourse;
