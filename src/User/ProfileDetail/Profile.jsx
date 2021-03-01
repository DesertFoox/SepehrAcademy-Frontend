import React, { Component } from "react";

//styles
import classes from "../css/Courses.module.css";
class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="container mt-4">
            <div className="container">
              <img
                className="img-fluid"
                src={
                  require("../../Assets/images/woman-holding-her-head-3280131.svg")
                    .default
                }
              />
              <div className="col bg-white profholder mt-2 mb-2">
                <div className="row">
                <p className="col-6 mt-2" id={classes.id}>@aralema</p>
                <p className="col-6" id={classes.name}>آرالما</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
