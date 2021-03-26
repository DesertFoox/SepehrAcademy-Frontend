import React, { Component, useEffect, useState } from "react";
import classes from "../../Authorization/Login/css/login.module.css";
import Header from "../../Header/Header";
import LastestNews from "../LatestNewsBlogs/LastestNewsblog";
import "./css/Singleblog.css";
import singlelog from "../../services/api/Admin-area/blogs/eachBlog.api";
import { Fragment } from "react";
const Singleblog = (props) => {
  const [Blog, setBlog] = useState([]);
  const singBlog = async () => {
    let res = await singlelog(props.match.params.id);
    setBlog([res]);
  };
  useEffect(() => {
    singBlog();
  }, []);
  return (
    <React.Fragment>
      <div className={classes.shape1_holder}></div>
      <Header />
      <div className="container mt-5 fonts rtl">
        {Blog.map((item) => (
          <Fragment>
            <h1 className="text-center news nass">{item.title}</h1>
            <div className="row mt-5 w-100 mx-auto">
              <div className="card col p-4 holder-content new-titles h-50">
                <img
                  className="img-fluid content-img mb-4"
                  src={require("../../../Assets/images/sali.png").default}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-text text-justify mb-5 text-p">
                    {item.text}
                  </h4>
                </div>
              </div>
            </div>
          </Fragment>
        ))}

        <LastestNews />
      </div>
    </React.Fragment>
  );
};

export default Singleblog;
