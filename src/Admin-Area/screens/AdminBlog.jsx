import React, { useEffect, useState } from "react";
import { MDBDataTable, MDBBtn } from "../../Assets/mdbreact/mdbreact";
import getBlogs from "../../Components/services/api/Admin-area/blogs/getBlogs.api";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

import http from "../../Components/services/api/http-service.api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const AdminBlog = () => {
  const [Blog, setBlog] = useState([]);
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
        label: "عکس بلاگ",
        field: "image",
        sort: "asc",
        width: 150,
      },
      {
        label: "نام بلاگ",
        field: "blogName",
        sort: "asc",
        width: 270,
      },
      {
        label: "کد بلاگ",
        field: "_id",
        sort: "asc",
        width: 200,
      },
      {
        label: "موضوع",
        field: "moz",
        sort: "asc",
        width: 150,
      },
      {
        label: "نوشته",
        field: "des",
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
    rows: Blog.map((item) => ({
      image: item.image,
      blogName: item.title,
      _id: item._id,
      moz: item.category,
      des: item.text.substr(0, 60) + "...",
      pos: (
        <div>
          <MDBBtn onClick={() => Deleteterm(item)} rounded color="danger">
            حذف
          </MDBBtn>{" "}
          <Link to={`/editblog/${item._id}`}>
            <MDBBtn rounded color="success">
              تغییر
            </MDBBtn>
          </Link>
        </div>
      ),
    })),
  };

  const Loadblogs = async () => {
    const res = await getBlogs();
    setBlog(res);
  };

  const Deleteterm = async (myBlog) => {
    const originalPosts = Blog;

    const posts = Blog.filter((p) => p._id !== myBlog._id);
    setBlog(posts);

    try {
      await http.delete(MainUrl + "term/" + myBlog._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This post has already been deleted.");
        setBlog(originalPosts);
    }
  };

  useEffect(() => {
    Loadblogs();
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>دوره ها</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="container">
        <MDBDataTable striped bordered small data={data} />{" "}

        </div>
      </CardBody>
    </Card>
  );
};

export default AdminBlog;