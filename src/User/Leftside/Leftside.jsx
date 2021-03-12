import React from "react";

//files
import Editprofile from "../editprofile/Editprofile";
import UserCourses from "../UserCourses/UserCourses";

//lib
import { useLocation } from "react-router-dom";

let Leftside = (props) => {
  const location = useLocation();
   if (location.pathname.toLowerCase() == "/user/dashboard/mycourses") {
    return <div><UserCourses /></div>;
  }
  else if (location.pathname.toLowerCase().includes("/user/dashboard")) {
    return <div> <Editprofile id={props.usid} /></div>;
  } 
};


export default Leftside;
