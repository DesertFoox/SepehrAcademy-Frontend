import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Notfound from "../Landing/404/404";

//User Zone
import Dashboard from "../../User/Panelholder/Panel";
//wrappers
import IsLogged from "../wrappers/auth/isLogged";
import Landing from "../Landing/Landing";
import Course from "../Courses/SingleCourse/SingleCourse";
import Courses from "../Courses/AllCourses/Courses";
import AllBlogs from "../Blogs/AllBlogs/Blogs";
import Singleblog from "../Blogs/SingleBlogs/SingleBlog";
class Routers extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/Courses" component={Courses} />
            <Route exact path="/Course/:id" component={Course} />
            <Route exact path="/Blogs" component={AllBlogs} />
            <Route exact path="/Blog:id?" component={Singleblog} />

            {IsLogged("/user/dashboard", Dashboard)}
            {IsLogged("/user/dashboard/myCourses", Dashboard)}
            <Route component={Notfound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Routers;
