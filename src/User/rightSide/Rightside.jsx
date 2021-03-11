import React, { useState, useEffect } from "react";
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

//api
import { getUserInformation } from "../../Components/services/storage/storage";
import { LogInUser } from "../../Components/services/api/Auth/login.api";

//modal
import UserDash from "../../Components/services/api/user/userdash.api";

const Rightside = () => {
  const [states, SetState] = useState(false);

  const toggle = () => {
    SetState(!states);
  };

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
        <MDBBtn color="" type="button" className="btn btnmenus mb-4 singup">
          <Link to="/Courses">ثبت نام دوره ها</Link>
        </MDBBtn>
        <MDBBtn color="" type="button" className="btn btnmenus mb-4 edit ">
          <Link to="/user/dashboard">ویرایش پروفایل</Link>
        </MDBBtn>
        <MDBBtn
          color=""
          type="button"
          onClick={toggle}
          className="btn btnmenus mb-4 leave disable"
        >
          <Link>خروج</Link>
        </MDBBtn>
      </div>
      {/* modal{" "} */}
      <MDBContainer>
        <MDBModal isOpen={states} toggle={toggle}>
          <MDBModalHeader toggle={toggle}>
            <p dir="rtl"> آیا میخواهید خارج شوید </p>
          </MDBModalHeader>
          <MDBModalFooter>
            <MDBBtn color="danger" onClick={toggle}>
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
};

export default Rightside;
