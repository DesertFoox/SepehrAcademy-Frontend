import React, { Component } from "react";
import CourseInformation from "../CourseInformation/Courseinformation";
import det from "../css/Courses.module.css";

class csCourse extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className={det["leftdet"]}>
         <CourseInformation/>
        </div>
      </React.Fragment>
    );
  }
}

export default csCourse;
