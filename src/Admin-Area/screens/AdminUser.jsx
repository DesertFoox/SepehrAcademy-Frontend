import React, { useEffect, useState } from "react";
import { MDBDataTable, MDBBtn } from "mdbreact";
import GetAllUser from "../../Components/services/api/Admin-area/user/GetAllUser.api";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

import http from "../../Components/services/api/http-service.api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const AdminCourse = () => {
  const [user, setUser] = useState([]);
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
    rows: []
  };

  const LoadUser = async () => {
    const res = await GetAllUser();
    setUser(res);
    console.log(user)
  };

  const DeleteUser = async (myterm) => {
    const originalPosts = user;

    const posts = user.filter((p) => p._id !== myterm._id);
    setUser(posts);

    try {
      await http.delete(MainUrl + "api/student" + myterm._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This post has already been deleted.");
        setUser(originalPosts);
    }
  };

  useEffect(() => {
    LoadUser();
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>کاربران</CardTitle>
      </CardHeader>
      <CardBody>
        <MDBDataTable striped bordered small data={data} />{" "}
      </CardBody>
    </Card>
  );
};

export default AdminCourse;
