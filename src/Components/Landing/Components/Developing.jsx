import React, { Component } from "react";
//Styles
import content from '../css/content.module.css';

class Developing extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={content["developing"]}>
          <p>دوره های درحال پیشرفت</p>
          <div className={content["right-developing"]}>
            <img src={require("../../../Assets/images/alonesit.svg").default} />
          </div>
          <div className={content["left-developing"]}>
            <div className={content["develop"]}>
              <div className={`${content["back-img"]} ${content.react}`}>
                <img src={require("../../../Assets/images/React.svg").default} />
              </div>
              <h3>ریکت مقدماتی تا پیشرفته </h3>
              <p className={content["master-develop"]}>آرمین ساکت-رایگان</p>
              <span className={content["rate-develop"]}>4.6</span>
            </div>
            <div className={content["develop"]}>
              <div className={`${content["back-img"]} ${content.html}`}>
                <div className={`${content["back-img"]} ${content.html}`}>
                  <img src={require("../../../Assets/images/HTML.svg").default} />
                </div>
              </div>
              <h3>مقدماتی تا پیشرفته html </h3>
              <p className={content["master-develop"]}>آرمین ساکت-رایگان</p>
              <span className={content["rate-develop"]}>4.6</span>
            </div>
            <div className={`${content.develop} ${content.move}`}>
              <div className={`${content["back-img"]} ${content.angular}`}>
                <div className={`${content["back-img"]} ${content.angular}`}>
                  <img
                    src={require("../../../Assets/images/Angularfull.svg").default}
                  />
                </div>
              </div>
              <h3>انگولار مقدماتی تا پیشرفته </h3>
              <p className={content["master-develop"]}>آرمین ساکت-رایگان</p>
              <span className={content["rate-develop"]}>4.6</span>
            </div>
            <div className={`${content.develop} ${content.move}`}>
              <div className={`${content["back-img"]} ${content.css}`}>
                <div className={`${content["back-img"]} ${content.css}`}>
                  <img src={require("../../../Assets/images/css.svg").default} />
                </div>
              </div>
              <h3>مقدماتی تا پیشرفته css </h3>
              <p className={content["master-develop"]}>آرمین ساکت-رایگان</p>
              <span className={content["rate-develop"]}>4.6</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Developing;
