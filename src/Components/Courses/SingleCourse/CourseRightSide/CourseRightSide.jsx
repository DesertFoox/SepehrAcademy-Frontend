import React, { useState, useEffect } from "react";
import det from "../css/Courses.module.css";
import EachTerm from "../../../services/api/course/eachTerm.api";

const CourseRightSide = (props) => {
  const [Course, setCourse] = useState([]);

  const LoadCourse = async () => {
    const result = await EachTerm("5d834c1a0caf360013010b7b");

    setCourse([result]);
  };
  console.log(props);
  useEffect(() => {
    LoadCourse();
  }, []);
  return (
    <React.Fragment>
      <div className={det["rightdet"]}>
        {Course.map((items) => (
          <img
            src={
              items.course.image.lenght > 0
                ? items.course.image
                : "../../../../Assets/images/pic-det.jpg"
            }
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default CourseRightSide;
