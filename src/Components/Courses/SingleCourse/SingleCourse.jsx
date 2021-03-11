import React, { useEffect } from "react";
import det from "./css/Courses.module.css";
import Header from "../../Header/Header";
import CourseRightSide from "./CourseRightSide/CourseRightSide";
import CourseLeftSide from "./CourseLeftSide/CourseLeftSide";

const singleCourse = (props) => {
  console.log(props.match.params.id);
  return (
    <div>
      <div className={det.shape1_holder}></div>
      <Header mgr={"93px"}/>
      <div id={det["panel_holder"]}>
        <CourseLeftSide LoadCourseId={props.match.params.id}/>
        <CourseRightSide />
      </div>
    </div>
  );
};

export default singleCourse;
