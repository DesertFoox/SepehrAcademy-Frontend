import React, { useState, useEffect } from "react";
import det from "../css/Courses.module.css";
import EachTerm from "../../../services/api/course/eachTerm.api";
import { Fragment } from "react";
import AddstudentCourse from '../../../services/api/Admin-area/Courses/AddStudentToCourse.api'
import { getItem } from '../../../services/storage/storage'

const CourseInformation = (props) => {
  const [Course, setCourse] = useState([]);
  const [user, setUser] = useState({});
  const [isLogged, setIslogged] = useState(false)
  const LoadCourse = async () => {
    const result = await EachTerm(props.LoadCourseId);
    setCourse([result]);
  };

  const ConvertDateHandler = (date) => {
    const dateObj = new Date(date);

    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    let newdate = year + "/" + month + "/" + day;
    return newdate;
  };
  const addCourse = async (termid) => {
    let res = await AddstudentCourse(user._id, termid);
return res
  }
  const getuserinf = () => {
    let user = JSON.parse(getItem("userinf"));
    setUser(user)
  }

  const logged = () => {
    let log = getItem("token") ? setIslogged(true) : setIslogged(false);
    return log;
  }
  useEffect(() => {
    logged();
    getuserinf();
    LoadCourse();
  }, []);
  return (
    <React.Fragment>
      <div className={det["holderdet"]}>
        <div className={det["bookmark"]}>
          <button className={det["bookmarkicon"]}></button>
        </div>
        {Course.map((item) => (
          <Fragment>
            <div className={det["priceholder"]}>
              <div className={det["itholder"]}>
                <div className={det["it1"]}>قیمت :</div>
                <div className={det["it2"]}>
                  <span>{item.cost}</span> تومان
                </div>
              </div>
              <button onClick={() => addCourse(item._id)} disabled={isLogged ? false : true } type="submit" className={det["signdet"]}>ثبت نام</button>
            </div>
            <div className={det["priceholder"]}>
              <div className={det["itholder"]}>
                <div className={det["it1"]}>دانشجویان دوره : </div>
                <div className={det["it2"]}>
                  <span className={det["count"]}>{item.students.length}</span>{" "}
                  نفر
                </div>
              </div>
            </div>
            <div className={det["priceholder"]}>
              <div className={"${det.itholder} ${det.det}"}>
                <div className={"${det.it1 ${det.small}"}>نام دوره</div>
                <div className={"${det.it2} ${small}"}>
                  <span className={det["count"]}>{item.course.courseName}</span>
                </div>
              </div>
              <div className={"${det.itholder} ${det}"}>
                <div className={"${det.it1} ${small}"}>مدرس</div>
                <div className={"${det.it2} ${small}"}>
                  <span className={det["count"]}>{item.teacher.fullName}</span>
                  <span className={det["count"]}></span>
                </div>
              </div>
              <div className={"${det.itholder} ${det.det}"}>
                <div className={"${det.it1} ${small}"}>راه ارتباطی</div>
                <div className={"${det.it2} ${small}"}>
                  <span className={det["count"]}>{item.teacher.email}</span>
                  <span className={det["count"]}></span>
                </div>
              </div>
              <div className={"${det.itholder} ${det.det}"}>
                <div className={"${det.it1} ${small}"}>شروع دوره از</div>
                <div className={"${det.it2} ${small}"}>
                  <span className={det["count"]}>
                    {ConvertDateHandler(item.startDate)}
                  </span>
                  <span className={det["count"]}></span>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default CourseInformation;
