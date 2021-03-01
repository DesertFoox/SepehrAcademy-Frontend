import React, { Component } from "react";
//Styles
import content from "../css/content.module.css";

class Suggestions extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={content["suggestions-complaints"]}>
          <p>پیشنهاد و شکایات</p>
          <div className={content["right-complaint"]}>
            <img
              src={require("../../../Assets/images/right-sit-lap.svg").default}
            />
          </div>
          <div className={content["left-complaint"]}>
            <h2>متن پیام</h2>
            <input
              id={content["message-text"]}
              type="text"
              placeholder="پیام مورد نظر را وارد کنید..."
            />
            <p>ایمیل :</p>
            <input
              id={content["emaill-2"]}
              type="email"
              placeholder="example@domain.com"
            />
            <div className={content["send"]}>ارسال</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Suggestions;
