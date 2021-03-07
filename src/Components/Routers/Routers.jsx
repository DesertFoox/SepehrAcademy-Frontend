import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect,Switch } from "react-router-dom";

//Pages
import Landing from "../Landing/Landing";
import Blogs from "../Blogs/AllBlogs/Blogs";
import Blog from "../Blogs/SingleBlogs/SingleBlog";
import Courses from "../Courses/AllCourses/Courses";
import Notfound from "../Landing/404/404";
import Course from "../Courses/SingleCourse/SingleCourse";

//user Autthorization
import LoginPage from "../Authorization/Login/Login";
import RegisterPage from "../Authorization/Register/Register";
import ForgetpassPage from "../Authorization/ForgetPass/Forget";

//User Zone
import Dashboard from "../../User/Panelholder/Panel";
import Editprofile from "../../User/editprofile/Editprofile";
import MyCourses from "../../User/UserCourses/UserCourses";

//wrappers
import IsLogged from '../wrappers/auth/isLogged'
class Routers extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Courses" component={Courses} />
          <Route exact path="/Course:id?" component={Course} />
          <Route exact path="/Blogs" component={Blogs} />
          <Route exact path="/Blog:id?" component={Blog} />

          {/* user Autthorization */}
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/Register" component={RegisterPage} />
          <Route exact path="/Forgetpass" component={ForgetpassPage} />
          {/* end user Autthorization */}

          {/*User Zone*/}
          {IsLogged('/User/Dashboard',Dashboard)}
          {/* <Route exact path="/User/Dashboard" component={Dashboard} />
          <Route exact path="/User/dashboard/myCourses" component={Dashboard} /> */}
          {/*End User Zone*/}

          {/*Admin Zone*/}
          
          {/*Admin Zone*/}
          <Route exact path="/not-found" component={Notfound} />
          <Redirect to="/not-found"/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Routers;
