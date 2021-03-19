import React, { useEffect, useState } from "react";
import { MDBDataTable, MDBBtn } from "../../Assets/mdbreact/mdbreact";
import getTermInf from "../../Components/services/api/course/term.api";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

import http from "../../Components/services/api/http-service.api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const AdminCourse = () => {
  const [term, setTerm] = useState([]);
  const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

  const ConvertDateHandler = (date) => {
    const dateObj = new Date(date);

    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    let newdate = year + "/" + month + "/" + day;
    return newdate;
  };

  const data = {
    columns: [
      {
        label: "عکس محصول",
        field: "image",
        sort: "asc",
        width: 150,
      },
      {
        label: "نام محصول",
        field: "courseName",
        sort: "asc",
        width: 270,
      },
      {
        label: "کد محصول",
        field: "_id",
        sort: "asc",
        width: 200,
      },
      {
        label: "تاریخ",
        field: "startDate",
        sort: "asc",
        width: 100,
      },
      {
        label: "مدرس",
        field: "teacher",
        sort: "asc",
        width: 150,
      },
      {
        label: "وضعیت",
        field: "title",
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
    rows: term.map((item) => ({
      image: item.course.image,
      courseName: item.course.courseName,
      _id: item.course._id,
      startDate: ConvertDateHandler(item.startDate),
      teacher: item.teacher.fullName,
      title: item.title,
      pos: (
        <div>
          <MDBBtn onClick={() => Deleteterm(item)} rounded color="danger">
            حذف
          </MDBBtn>{" "}
          <Link to={`/editcourse/${item._id}`}>
            <MDBBtn rounded color="success">
              تغییر
            </MDBBtn>
          </Link>
        </div>
      ),
    })),
  };

  const LoadTerm = async () => {
    const res = await getTermInf();
    setTerm(res);
  };

  const Deleteterm = async (myterm) => {
    const originalPosts = term;

    const posts = term.filter((p) => p._id !== myterm._id);
    setTerm(posts);

    try {
      await http.delete(MainUrl + "term/" + myterm._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This post has already been deleted.");
      setTerm(originalPosts);
    }
  };

  useEffect(() => {
    LoadTerm();
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>دوره ها</CardTitle>
      </CardHeader>
      <CardBody>
        <MDBDataTable striped bordered small data={data} />{" "}
      </CardBody>
    </Card>
  );
};

export default AdminCourse;
