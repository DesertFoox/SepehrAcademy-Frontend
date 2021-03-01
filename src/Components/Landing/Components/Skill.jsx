import React, { Component } from "react";
//Styles
import content from '../css/content.module.css';

class Skill extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={content["skill"]}>
          <div id={content["right-skill"]}>
            <p className={content["title-skill"]}>
              مهارت های <strong> جدید </strong> و یادگیری
              <strong> آسان </strong>
            </p>
            <div className={content["border-bottom-skill"]}></div>
            <p className={content["des-skill"]}>
              پژوهشگاه سپهر با هدف تولید و انتشار محتوای با کیفیت آموزشی و
              همچنین آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و
              امید داریم بتوانیم با راه کارهای نوین و استفاده از پتانسیل فضای
              مجازی ایجاد فرصت کنیم برای افرادی که خواهان پیشرفت خود و کشورشان
              هستند.
            </p>
            <div className={content["see-curses"]}>
              مشاهده دوره ها
              <img src={require("../../../Assets/images/down.svg").default} />
            </div>
          </div>
          <div id={content["left-skill"]}>
            <img
              className={content["laptop-vector-skill"]}
              src={require("../../../Assets/images/computer.svg").default}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Skill;
