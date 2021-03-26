import React, { useEffect, useState } from "react";
import {
  MDBDataTable,
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "../../Assets/mdbreact/mdbreact";
import GetAllUser from "../../Components/services/api/Admin-area/user/GetAllUser.api";
import getTermInf from "../../Components/services/api/course/term.api";
import AddStudentToCourse from "../../Components/services/api/Admin-area/Courses/AddStudentToCourse.api";

import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

import http from "../../Components/services/api/http-service.api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import ModalPage from "../../Components/modal/Modal";
const AdminCourse = () => {
  const [user, setUser] = useState([]);
  const [term, setTerm] = useState([]);
  const [userCheckTerm, setUserCheckTerm] = useState([]);
  const [modal, setModal] = useState(false);
  const [userId, setUserID] = useState("");
  const [allTermFilter, setAllTermFilter] = useState([]);
  //  شروع دوره ها
  const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

  const ConvertDateHandler = (date) => {
    const dateObj = new Date(date);

    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    let newdate = year + "/" + month + "/" + day;
    return newdate;
  };
  //  پایان دوره ها
  const data = {
    columns: [
      {
        label: "نام کاربر",
        field: "username",
        sort: "asc",
        width: 150,
      },
      {
        label: "ایمیل کاربر",
        field: "userEmail",
        sort: "asc",
        width: 100,
      },
      {
        label: "کدملی کاربر",
        field: "nationalid",
        sort: "asc",
        width: 100,
      },
      {
        label: "ایدی کاربر",
        field: "_id",
        sort: "asc",
        width: 100,
      },
      {
        label: "شماره کارببر",
        field: "userphone",
        sort: "asc",
        width: 150,
      },
      {
        label: "دوره ها ",
        field: "termLength",
        sort: "asc",
        width: 150,
      },
      {
        label: "وضعیت کاربر",
        field: "userRole",
        sort: "asc",
        width: 100,
      },
      {
        label: "حالت",
        field: "pos",
        sort: "asc",
        width: 100,
      },
    ],
    rows:
      user &&
      user.map((users) => ({
        username: users.fullName,
        userEmail: users.email.substr(0,30) + "...",
        nationalid: users.nationalId,
        _id: users._id,
        userphone: users.phoneNumber,
        termLength: users.terms.length,
        userRole: users.role,
        pos: (
          <Fragment>
            <Link to={`/edituser/${users._id}`}>
              <button className="btn btn-primary">تغییر</button>
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => DeleteUser(users)}
            >
              حذف
            </button>
            <button
              className="btn btn-success"
              onClick={() => toggle(users._id)}
            >
              دوره ها
            </button>
          </Fragment>
        ),
      })),
  };

  const LoadUser = async () => {
    const res = await GetAllUser();
    console.log("inComponent", res);
    setUser(res);
  };

  const DeleteUser = async (myterm) => {
    const originalPosts = user;

    const posts = user.filter((p) => p._id !== myterm._id);
    setUser(posts);
    try {
      await http.delete(MainUrl + "student/" + myterm._id);
      toast.success("   کاربر با موفقیت حذف شد");
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("این کاربر از لیست کاربر قبلا پاک شده است");
      setUser(originalPosts);
    }
  };

  const DeleteUserFromCourse = async (myterm) => {
    const originalPosts = user;

    const posts = user.filter((p) => p._id !== userId);
    setUser(posts);
    try {
      await http.post(MainUrl + `term/removeStudentFromTerm/${userId}`, {
        termId: myterm,
      });
      toast.success("دوره از لیست کاربر با موفقیت حذف شد");
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("این دوره از لیست کاربر قبلا پاک شده است");
      setUser(originalPosts);
    }
  };
  //  شروع دوره ها

  const AddToCourse = async (userId,termId) => {
    const add = await AddStudentToCourse(userId, termId);
  };
  const termdata = {
    columns: [
      {
        label: "نام محصول",
        field: "courseName",
        sort: "asc",
        width: 270,
      },
      {
        label: "مدرس",
        field: "teacher",
        sort: "asc",
        width: 150,
      },

      {
        label: "حالت",
        field: "pos",
        sort: "asc",
        width: 100,
      },
    ],
    rows: allTermFilter.map((item) => ({
      courseName: item.course.courseName,
      teacher: item.teacher.fullName,
      pos: !item.flag ? (
        <MDBBtn
          onClick={() => DeleteUserFromCourse(item._id)}
          rounded
          color="danger"
        >
          {" "}
          {console.log(item._id)}
          حذف
        </MDBBtn>
      ) : (
        <MDBBtn rounded color="success" onClick={() => AddToCourse(userId,item._id)}>
          اضافه کردن
        </MDBBtn>
      ),
    })),
  };
  //  const LoadTerm = async () => {

  //  };

  const toggle = async (userID) => {
    setModal(!modal);
    const res = await getTermInf();
    const FilterCourses = res.filter(
      (course) => !course.students.some((student) => student._id === userID)
    );
    const allTermsFlag = res.map((terms) => {
      const check = FilterCourses.some((filter) => filter._id === terms._id);
      if (check) {
        return { flag: true, ...terms };
      } else return { flag: false, ...terms };
    });
    setAllTermFilter(allTermsFlag);
    setUserID(userID);
    setTerm(res);
    setUserCheckTerm([FilterCourses]);
  };
  console.log("s" + userCheckTerm);
  // پایان دوره ها
  useEffect(() => {
    LoadUser();
  }, [userCheckTerm]);
  return (
    <Card>
      <CardHeader>
        <CardTitle>کاربران</CardTitle>
        <MDBContainer>
          <MDBModal isOpen={modal} toggle={toggle}>
            <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader>
            <MDBModalBody>
              <MDBDataTable striped bordered small data={termdata} />{" "}
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggle}>
                Close
              </MDBBtn>
              <MDBBtn color="primary">Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>{" "}
      </CardHeader>
      <CardBody>
        <div className="container">
        <MDBDataTable striped bordered small data={data} />
        </div>
      </CardBody>
    </Card>
  );
};

export default AdminCourse;
