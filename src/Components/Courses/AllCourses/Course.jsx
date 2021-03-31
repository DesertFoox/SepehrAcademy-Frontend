import React, { useState } from "react";
import { Link } from "react-router-dom";
import det from "./css/det.module.css";
import { MDBSpinner } from "../../../Assets/mdbreact/mdbreact";
import { Item } from "react-contexify";

const Course = ({ terms, Loading }) => {
  const [search, setSearch] = useState("");

  if (Loading) {
    return <MDBSpinner className="mt-5" big />;
  }

  return (
    <div className={det["itemeholder"]}>
      <input
        className="form-control mt-5"
        type="text"
        placeholder="جستجو"
        aria-label="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      {terms
        .filter((term) => {
          if (search == "") {
            console.log();
            return term;
          } else if (
            term.course.courseName.toLowerCase().includes(search.toLowerCase())
          ) {
            return term;
          }
        })
        .map((term) => (
          <div key={term.id} className={det["items"]}>
            <div className={det["picholder"]}></div>
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
