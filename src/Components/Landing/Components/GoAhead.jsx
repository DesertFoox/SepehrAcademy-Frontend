import React, { Component } from "react";
//Styles
import content from '../css/content.module.css';

class GoAhead extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={content["go-ahead"]}>
          <p>از همه جلو بزنید</p>
          <div className={content["left-ahead"]}>
            <img src={require("../../../Assets/images/lap-left.svg").default} />
          </div>
          <div className={content["right-ahead"]}>
            <h2>عضویت در خبرنامه</h2>
            <p>ایمیل :</p>
            <input
              id={content["emaill"]}
              type="email"
              placeholder="example@domain.com"
            />
            <div className={content["input-circle"]}></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GoAhead;
