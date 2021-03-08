import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

//css
import "../css/Courses.css";
import ProfileDetails from "../ProfileDetail/Profile";

//wrapper
import Logout from "../../Components/wrappers/auth/LogOut";

//modal

import Modal from "../modal/logout.modal";
class Rightside extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    return (
      <React.Fragment>
        <ProfileDetails />
        <div
          className="btn-group-vertical btgg"
          role="group"
          aria-label="Vertical button group"
        >
          <MDBBtn color="" type="button " className="btn btnmenus mb-4 my_cour">
            <Link to="/user/dashboard/Mycourses">دوره های من</Link>
          </MDBBtn>
          <MDBBtn color="" onClick={()=> console.log('asd')} type="button" className="btn btnmenus mb-4 singup">
            <Link to="/Courses">ثبت نام دوره ها</Link>
          </MDBBtn>
          <MDBBtn color="" type="button" className="btn btnmenus mb-4 edit ">
            <Link to="/user/dashboard">ویرایش پروفایل</Link>
          </MDBBtn>
          <MDBBtn
            color=""
            type="button"
            onClick={this.toggle}
            className="btn btnmenus mb-4 leave disable"
          >
            <Link>خروج</Link>
          </MDBBtn>
        </div>
        {/* modal{" "} */}
        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>
              <p dir="rtl"> آیا میخواهید خارج شوید </p>
            </MDBModalHeader>
            <MDBModalFooter>
              <MDBBtn color="danger" onClick={this.toggle}>
                خیر
              </MDBBtn>
              <MDBBtn color="success" onClick={Logout}>
                بله
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </React.Fragment>
    );
  }
}

export default Rightside;
