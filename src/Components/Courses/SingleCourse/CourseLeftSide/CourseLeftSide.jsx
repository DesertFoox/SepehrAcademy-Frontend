import React, { Component } from "react";
import CourseInformation from "../CourseInformation/Courseinformation";
import det from "../css/Courses.module.css";

const csCourse = (props) => {
  return (
    <React.Fragment>
      <div className={det["leftdet"]}>
        <CourseInformation LoadCourseId={props.LoadCourseId}/>
      </div>
    </React.Fragment>
  );
};

export default csCourse;
