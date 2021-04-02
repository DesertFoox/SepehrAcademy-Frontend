import React, { useEffect, useState } from "react";
import { MDBDataTable, MDBBtn } from "../../Assets/mdbreact/mdbreact";
import kourses from "../../Components/services/api/Admin-area/kourses/kourses.api";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

import http from "../../Components/services/api/http-service.api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const AdminKourse = () => {
  const [kours, setKours] = useState([]);
  const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
  console.log(kours);
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
        label: "توضیحات",
        field: "description",
        sort: "asc",
        width: 150,
      },
      {
        label: "ترم",
        field: "terms",
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
      kours.length &&
      kours.map((item) => ({
        image: item.image,
        courseName: item.courseName,
        _id: item._id,
        startDate: ConvertDateHandler(item.createDate),
        description: item.description.substr(0,25) + "...",
        terms: item.terms.length,
        pos: (
          <div>
            <MDBBtn onClick={() => Deleteterm(item)} rounded color="danger">
              حذف
            </MDBBtn>{" "}
            <Link to={`/editkourse/${item._id}`}>
              <MDBBtn rounded color="success">
                تغییر
              </MDBBtn>
            </Link>
          </div>
        ),
      })),
  };

  const LoadTerm = async () => {
    const res = await kourses();
    setKours(res);
  };

  const Deleteterm = async (mycourse) => {
    const originalPosts = kours;

    const posts = kours.filter((p) => p._id !== mycourse._id);
    setKours(posts);

    try {
      await http.delete(MainUrl + "course/" + mycourse._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This post has already been deleted.");
      setKours(originalPosts);
    }
  };
  useEffect(() => {
    LoadTerm();
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>دوره ها</CardTitle>
        <Link to="/admin/addkourses">
        <MDBBtn color="primary px-4 py-2">ساخت کورس</MDBBtn>
        </Link>
      </CardHeader>
      <CardBody>
        <div className="container">
        <MDBDataTable striped bordered small data={data} />
        </div>
      </CardBody>
    </Card>
  );
};

export default AdminKourse;
