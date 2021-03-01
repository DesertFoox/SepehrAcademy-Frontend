import React, { Component } from "react";

//files
import Editprofile from "../editprofile/Editprofile";
import UserCourses from "../UserCourses/UserCourses";

//lib
import { useLocation } from "react-router-dom";

let CheckUrlHandler = () => {
  const location = useLocation();
  if (location.pathname.toLowerCase() == "/user/dashboard") {
    let Editprof = <Editprofile />;
    return Editprof;
  } else if (location.pathname.toLowerCase() == "/user/dashboard/mycourses") {
    let Mycourses = <UserCourses />;
    return Mycourses;
  }
};
const Leftside = () => {
  return <div>{CheckUrlHandler()}</div>;
};

export default Leftside;
