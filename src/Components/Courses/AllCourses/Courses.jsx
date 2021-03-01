import React, { Component } from "react";
import det from "./css/det.module.css";
import Header from "../../Header/Header";
import Course from "./EachCourse/Course";

class Courses extends Component {
  render() {
    return (
      <div>
        <div className={det.shape1_holder}></div>
        <Header />
        <div className={det["courses_holder"]}>
          <div className={det["courses_header"]}>دوره ها</div>
          <div className={det["itemeholder"]}>
            <Course />
            <Course /> 
            <Course />
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;
