import React, { Fragment } from "react";
import Header from "../../Header/Header";
import det from "../../Landing/css/Courses.module.css";

const Notfound = () => {
  return (
    <Fragment>
      {" "}
      <div className={det.shape1_holder}></div>
      <Header />
      <div className="row mt-5">
        <div className="col-lg-6 col-md-12 mb-4">
            <img className="img-fluid" src={require('../../../Assets/images/404.svg').default} alt=""/>
        </div>
        <div className="col-lg-6 mt-5">
          <h1 className="notfound mt-5">صفحه مورد نظر شما پیدا نشد</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default Notfound;
