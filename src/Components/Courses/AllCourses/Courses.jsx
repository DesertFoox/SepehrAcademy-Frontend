import React, { useState, useEffect, Fragment } from "react";
import det from "./css/det.module.css";
import Header from "../../Header/Header";
import GetCourse from "../../services/api/course/getCourse.api";
import getTermInf from "../../services/api/course/term.api";

const Courses = () => {
  const [course, setCourse] = useState([]);
  const [term, setTerm] = useState([]);

  const loadCourses = async () => {
    const result = await GetCourse();
    setCourse(result);
  };
  const LoadTerm = async () => {
    const res = await getTermInf();
    setTerm(res);
  };
  useEffect(() => {
    LoadTerm();
    console.log(term);
    loadCourses();
  }, []);
  return (
    <Fragment>
      <div className={det.shape1_holder}></div>
      <Header />
      <div className={det["courses_holder"]}>
        <div className={det["courses_header"]}>دوره ها</div>
        <div className={det["itemeholder"]}>
          {/* {course.map((items) => (
            <div key={items.id} className={det["items"]}>
              <div className={det["picholder"]}>
                <img src={items.image} />
              </div>
              <div className={det["sign-btn"]}>
                <button>ثبت نام</button>
              </div>
              <div className={det["description"]}>
                <h2>{items.courseName}</h2>
                <p> مهدی اصغری : مدرس</p>
                <span className={det["mentor"]}>مهدی اصغری : مدرس</span>
                <br />
                <span className={det["price"]}>س</span>
                <span>تومان</span>
                <br />
                <span className={det["rate"]}>4.6</span>
              </div>
            </div>
          ))} */}
         
          {term.length ? term.map((term) => (
            <div key={term.id} className={det["items"]}>
              <div className={det["picholder"]}>
                <img src={term.image} />
              </div>
              <div className={det["sign-btn"]}>
                <button>ثبت نام</button>
              </div>
              <div className={det["description"]}>
                <h2>{term.course.courseName}</h2>
                <p> </p>
                <span className={det["mentor"]}>  مدرس : {term.teacher.fullName}</span>
                <br />
                <span className={det["price"]}>{term.cost}</span>
                <span className="m-2">تومان</span>
                <br />
                <span className={det["rate"]}>4.6</span>
              </div>
            </div>
          )) : <h2 className="mt-4">دوره ای وجود ندارد</h2>}
        </div>
      </div>
    </Fragment>
  );
};

export default Courses;
