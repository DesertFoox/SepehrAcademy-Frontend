import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import {Link} from 'react-router-dom'
//css
import '../css/Courses.css'
import ProfileDetails from "../ProfileDetail/Profile";
class Rightside extends Component {
  render() {
    return (
      <React.Fragment>
        <ProfileDetails />
        <div className="btn-group-vertical btgg"  role="group" aria-label="Vertical button group">
          <MDBBtn color="" type="button " className="btn btnmenus mb-4 my_cour"><Link to="/user/dashboard/Mycourses">دوره های من</Link></MDBBtn>
          <MDBBtn color="" type="button" className="btn btnmenus mb-4 singup"><Link to="/Courses">ثبت نام دوره ها</Link></MDBBtn>
          <MDBBtn color="" type="button" className="btn btnmenus mb-4 edit "><Link to="/user/dashboard">ویرایش پروفایل</Link></MDBBtn>
          <MDBBtn color=""  type="button" className="btn btnmenus mb-4 leave disable"><Link to="/Leave">خروج</Link></MDBBtn>
        </div>
      </React.Fragment>
    );
  }
}

export default Rightside;