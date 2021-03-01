import React, { Component } from "react";
//Styles
import content from '../css/content.module.css';

class Grouping extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={content["grouping"]}>
          <p>دسته بندی</p>
          <div className={`${content.group} ${content.math}`}>ریاضی</div>
          <div className={`${content.group} ${content.technology}`}>
            تکنولوژی
          </div>
          <div className={`${content.group} ${content.chemistry}`}>شیمی</div>
          <div className={`${content.group} ${content.physics}`}>فیزیک</div>
          <input type="button" value="بیشتر" />
        </div>
      </React.Fragment>
    );
  }
}

export default Grouping;
