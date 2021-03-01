import React, { Component } from "react";
//Styles
import content from '../css/content.module.css';

class ResSkill extends Component {
  render() {
    return (
      <React.Fragment>
        <div id={content["res-skill"]}>
          <h2 class={content["h2-title"]}>مهارت های جدید و یادگیری آسان</h2>
          <div class={content["see-curses"]}>
            مشاهده دوره ها
            <img src={require("../../../Assets/images/down.svg").default} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ResSkill;
