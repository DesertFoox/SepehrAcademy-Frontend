import React, { Component } from "react";
import det from "../css/Courses.module.css";
class CourseRightSide extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className={det["rightdet"]}>
          <img src={require("../../../../Assets/images/pic-det.jpg").default} />
        </div>
      </React.Fragment>
    );
  }
}

export default CourseRightSide;
