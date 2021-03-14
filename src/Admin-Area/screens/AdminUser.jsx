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
        label: "نام کاربر",
        field: "username",
        sort: "asc",
        width: 150,
      },
      {
        label: "ایمیل کاربر",
        field: "userEmail",
        sort: "asc",
        width: 270,
      },
      {
        label: "کدملی کاربر",
        field: "nationalid",
        sort: "asc",
        width: 200,
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
    rows: user.map(users => ({
      username:users.fullName,
      userEmail:users.email,
      nationalid:users.nationalId,
      _id:users._id,
      userphone:users.phoneNumber,
      userRole:users.role,
      pos:<Link to={`/edituser/${users._id}`}><button className="btn btn-primary" >تغییر</button></Link>
    }))
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
