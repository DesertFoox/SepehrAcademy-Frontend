import React, { Component } from "react";

import Rightside from "../rightSide/Rightside";
import Leftside from "../Leftside/Leftside";
import "../css/dash.module.css";
import Classes from "../css/Courses.module.css";

import '../../Assets/Styles/login_signup/style.css'
import '../../Assets/Styles/login_signup/login.css'
import classes from "../../Components/Authorization/Login/css/login.module.css";
import Header from "../../Components/Header/Header";
import { ToastContainer } from "react-toastify";

const Panel =(props)=> {
    return (
      <React.Fragment>
        <ToastContainer limit={1} />
        <div className={classes.shape1_holder}></div>

        <div className={classes.shape2_holder}></div>
        <Header />
        <div className="container mt-5 bg-white " id={Classes.panel_holder}>
          <div className="row">
            <div className="col-lg-9">
              <Leftside usid={props.match.params.id} />
            </div>
            <div className="col-lg-3" id={Classes.right}>
              <Rightside />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }


export default Panel;
