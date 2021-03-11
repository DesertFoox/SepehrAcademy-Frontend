import React, { Component } from "react";
import { Link } from "react-router-dom";
import det from "./css/det.module.css";
import { MDBSpinner } from "mdbreact";

const Course = ({ terms, Loading }) => {
  if (Loading) {
    return <MDBSpinner className="mt-5" big />;
  }
  return (
    <div className={det["itemeholder"]}>
      {terms.map((term) => (
        <div key={term.id} className={det["items"]}>
          <div className={det["picholder"]}>
            <img src={term.course.image} />
          </div>
          <div className={det["sign-btn"]}>
            <button>
              <Link className="sadawsd" to={"/course/" + term._id}>
                ثبت نام
              </Link>
            </button>
          </div>
          <div className={det["description"]}>
            <h2>
              <Link to={"/course/" + term._id}>{term.course.courseName}</Link>
            </h2>
            <p> </p>
            <span className={det["mentor"]}>
              مدرس : {term.teacher.fullName}
            </span>
            <br />
            <span className={det["price"]}>{term.cost}</span>
            <span className="m-2">تومان</span>
            <br />
            <p className="">
              {term.course.description.length > 100 &&
                term.course.description.substr(0, 100) + "..."}
            </p>
            <span className={det["rate"]}>
              {Math.floor(Math.random() * 4 + 1)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Course;
