import React, { Component } from "react";
//Styles
import content from '../css/content.module.css';

class TopPerofessors extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={content["top-professors"]}>
          <p>اساتید برتر</p>
          <div className={content["all-professors"]}>
            <div className={content["right-side"]}>
              <div className={`${content.professor} ${content.lecturer1}`}>
                <img
                  src={require("../../../Assets/images/arminpic.svg").default}
                />
                <h3>آرمین ساکت</h3>
                <p>طراح فرانت</p>
              </div>
              <div className={`${content.professor} ${content.lecturer2}`}>
                <img
                  src={require("../../../Assets/images/nazaripic.svg").default}
                />
                <h3>حامد نظری</h3>
                <p>طراح فرانت</p>
              </div>
              <div className={`${content.professor} ${content.lecturer3}`}>
                <img
                  src={require("../../../Assets/images/arminpic.svg").default}
                />
                <h3>آرمین ساکت</h3>
                <p>طراح فرانت</p>
              </div>
              <div className={`${content.professor} ${content.lecturer4}`}>
                <img
                  src={require("../../../Assets/images/nazaripic.svg").default}
                />
                <h3>حامد نظری</h3>
                <p>طراح فرانت</p>
              </div>
            </div>
            <div className={content["left-side"]}>
              <div className={content["big-professor"]}>
                <img
                  src={require("../../../Assets/images/bahrpic.svg").default}
                />
                <h3>دکتر محمد حسین بحر العلومی</h3>
                <h4>مدیریت</h4>
                <p>
                  مدرس در آموزشگاه، مدرس در دانشگاه علم و فناوری مازندران مستقر
                  در بهشر، مدرس دوره های وب
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TopPerofessors;
