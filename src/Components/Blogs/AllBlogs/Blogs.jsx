import React, { useEffect, useState } from "react";
import classes from "../../Authorization/Login/css/login.module.css";
import Header from "../../Header/Header";
import LastestNews from "../LatestNewsBlogs/LastestNewsblog";
import getBlogs from "../../services/api/Admin-area/blogs/getBlogs.api";
import "./css/Blogs.css";
import Paginations from "../../Pagination/Pagination";
import { Link } from "react-router-dom";
import { MDBSpinner } from "../../../Assets/mdbreact/mdbreact";

const AllBlogs = () => {
  const [Blogs, setBlogs] = useState([]);
  const [loading, Setloading] = useState(true);
  const [currentpage, SetCurrentPage] = useState(1);
  const [BlogPerPage] = useState(3);

  const Getblog = async () => {
    Setloading(true);
    let blogs = await getBlogs();
    setBlogs(blogs);
    Setloading(false);
  };
  console.log(Blogs);

  useEffect(() => {
    Getblog();
  }, []);
  if (loading) {
    setTimeout(function () {
      return (
        <h2>
          مشکلی در دیتا بیس وجود دارد،لطفا مطئن شوید ارتباط شما با اینترنت
          برقرار است
        </h2>
      );
    }, 10000);

    return <MDBSpinner className="mt-5" big />;
  }
  //get Current course
  const indexOfLastPost = currentpage * BlogPerPage;
  const indexOfFirstPost = indexOfLastPost - BlogPerPage;
  const CurrentPost = Blogs.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => SetCurrentPage(pageNumber);

  return (
    <React.Fragment>
      {/* <!-- shapes --> */}
      <div className={classes.shape1_holder}></div>
      <Header mgr={"195px"} />
      <div className="container conts rtl fonts mt65">
        <h1 className="text-center news ness mt-5">خبر ها</h1>
        <div className="row mt-5 px-3">
          {CurrentPost.map((item) => (
            <div className="col-lg-12 bg-white mb-3 blogs-bg h-25">
              <div className="row p-4">
                <div className="col-lg-6">
                  <img
                    src={
                      require("../../../Assets/images/Group 350.svg").default
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-6">
                  <h1 className="mt-5">
                    <Link to={`/Blog/${item._id}`}>{item.title}</Link>
                  </h1>
                  <h3 className="justify-text mt-3">{item.text}</h3>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center">
            <Paginations
              postsPerPage={BlogPerPage}
              totalPosts={Blogs.length}
              paginate={paginate}
              allPages={Blogs.length}
              currentPage={currentpage}
            />
          </div>
        </div>
        <LastestNews />
      </div>
    </React.Fragment>
  );
};

export default AllBlogs;
