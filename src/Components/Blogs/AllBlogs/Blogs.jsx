import React, { Component } from "react";
import classes from "../../Authorization/Login/css/login.module.css";
import Header from "../../Header/Header";
import LastestNews from "../LatestNewsBlogs/LastestNewsblog";
import "./css/Blogs.css";
class AllBlogs extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <!-- shapes --> */}
        <div className={classes.shape1_holder}></div>
        <Header />
        <div className="container conts rtl fonts mt65">
          <h1 className="text-center news ness mt-5">خبر ها</h1>
          <div className="row mt-5 px-3">
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
                  <h1 className="mt-5">خرید لامبورگینی توسط آرمین ساکت</h1>
                  <h3 className="justify-text mt-3">
                    خرید لامبورگینی توسط آرمین ساکت خرید لامبورگینی توسط آرمین
                    ساکت خرید لامبورگینی توسط آرمین ساکت خرید لامبورگینی توسط
                    آرمین ساکت خرید لامبورگینی .خرید لامبورگینی توسط آرمین ساکت
                    خرید لامبورگینی توسط آرمین ساکت خرید لامبورگینی توسط آرمین
                    ساکت خرید لامبورگینی توسط آرمین ساکت خرید لامبورگینی .
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-12 bg-light mb-3 blogs-bg h-25">
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
                  <h1 className="mt-5">خرید لامبورگینی توسط آرمین ساکت</h1>
                  <h3 className="justify-text mt-3">
                    خرید لامبورگینی توسط آرمین ساکت خرید لامبورگینی توسط آرمین
                    ساکت خرید لامبورگینی توسط آرمین ساکت خرید لامبورگینی توسط
                    آرمین ساکت خرید لامبورگینی .خرید لامبورگینی توسط آرمین ساکت
                    خرید لامبورگینی توسط آرمین ساکت خرید لامبورگینی توسط آرمین
                    ساکت خرید لامبورگینی توسط آرمین ساکت خرید لامبورگینی .
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-12 bg-light mb-3 blogs-bg h-25">
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
                  <h1 className="mt-5">خرید لامبورگینی توسط آرمین ساکت</h1>
                  <h3 className="justify-text mt-3">
                    خرید لامبورگینی توسط آرمین ساکت خرید لامبورگینی توسط آرمین
                    ساکت خرید لامبورگینی توسط آرمین ساکت خرید لامبورگینی توسط
                    آرمین ساکت خرید لامبورگینی .خرید لامبورگینی توسط آرمین ساکت
                    خرید لامبورگینی توسط آرمین ساکت خرید لامبورگینی توسط آرمین
                    ساکت خرید لامبورگینی توسط آرمین ساکت خرید لامبورگینی .
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <LastestNews />
        </div>
      </React.Fragment>
    );
  }
}

export default AllBlogs;
