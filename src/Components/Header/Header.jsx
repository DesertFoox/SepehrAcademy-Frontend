import React, { Component } from "react";
import classes from "../Authorization/Login/css/login.module.css";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <!-- header --> */}

        <div id={classes.menu}>
          <div className={classes["menu-logo"]}>
            <img src={require("../../Assets/images/hpgraph-1.svg").default} />
          </div>
          <ul className={classes["menu-tab"]}>
            <li className={`${classes.below} ${classes["1"]}`}>
              {" "}
              <Link to="/">خانه</Link>
              <div className={classes["border-bottom"]}></div>
            </li>
            <li className={`${classes.below} ${classes["1"]}`}>
              <Link to="/Courses">آموزش</Link>
            </li>
            <li className={`${classes.below} ${classes["1"]}`}> خدمات</li>
            <li className={`${classes.below} ${classes["1"]}`}> مالی</li>
            <li className={`${classes.below} ${classes["1"]}`}> تماس با ما</li>
          </ul>
        </div>
        <div id={classes["search-holder"]}>
          <input id={classes["search-box"]} type="search" />
          <Link to="/user/dashboard">
            <div id={classes.user}></div>
          </Link>
          <p className={classes["little-des"]}> میان هزاران دوره ی آنلاین</p>
        </div>
        {/* <!-- form --> */}
        {/* <!-- responsive header --> */}
        <div className={classes["drop_down"]}>
          <div className={classes["back"]}></div>
          <div className={`${classes.dropItems} ${classes.sel}`}>خانه</div>
          <span className={classes.lineForHome}></span>
          <div className={classes.dropItems}>آموزش</div>
          <div className={classes.dropItems}>خدمات</div>
          <div className={classes.dropItems}>مالی</div>
          <div className={classes.dropItems}>تماس با ما</div>

          <div className={classes.dropItemss}>
            {" "}
            <img
              src={require("../../Assets/images/Work.svg").default}
              alt=""
              className="nahyeKarbari"
            />
            ناحیه کاربری
          </div>
        </div>
        <div className={classes["top_header"]}>
          <div className={`${classes.purse} ${classes.ith}`}></div>

          <div className={`${classes["header_button"]} ${classes.ith}`}></div>
        </div>
        {/* <!-- responsive header --> */}
      </React.Fragment>
    );
  }
}

export default Header;
