import React, { Component } from "react";
//Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
//Landing Components
import ResSkill from './Components/ResSkill';
import Skill from './Components/Skill';
import Grouping from './Components/Grouping';
import Developing from './Components/Developing';
import GoAhead from './Components/GoAhead';
import TopPerofessors from './Components/TopProfessors';
import Suggestions from './Components/Suggestions';
//Styles
import det from "./css/Courses.module.css";
import base from './css/base.module.css';
import content from './css/content.module.css';
import  '../../Assets/js/anim';

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={det.shape1_holder}></div>
        <Header />
        <div id={base["center-holder"]}>
          <div id={content["content"]}>
            <ResSkill />
            <Skill />
            <Grouping />
            <Developing />
            <GoAhead />
            <TopPerofessors />
            <Suggestions />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Landing;
