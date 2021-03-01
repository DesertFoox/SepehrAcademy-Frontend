import React, { Component } from "react";
import det from "./css/Courses.module.css";
import Header from "../../Header/Header";
import CourseRightSide from "./CourseRightSide/CourseRightSide";
import CourseLeftSide from "./CourseLeftSide/CourseLeftSide";


class singleCourse extends Component {
  render() {
    return (
      <div>
        <div className={det.shape1_holder}></div>
        <Header />
        <div id={det["panel_holder"]}>
          <CourseLeftSide />
          <CourseRightSide />
        </div>
      </div>
    );
  }
}

export default singleCourse;
