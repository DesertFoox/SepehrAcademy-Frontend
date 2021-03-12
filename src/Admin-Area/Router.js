import React, { Suspense, lazy } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { history } from "./history";
import Spinner from "./components/@vuexy/spinner/Loading-spinner";
import { ContextLayout } from "./core/utils/context/Layout";
import VerticalLayout from "./layouts/VerticalLayout";
import "../Admin-Area/index.scss";
import NotFound from "../Components/Landing/404/404";
// Route-based code splitting
const Home = lazy(() => import("./screens/Home"));

const Dashboards = lazy(() => import("./screens/Dashboard/Dashboard"));

const Courses = lazy(() => import("./screens/Admincourse"));

const AddCourse = lazy(() => import("./screens/AddCourse"));

const EditCourse = lazy(() => import("./screens/UpdateCourse"));

// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        <ContextLayout.Consumer>
          {(context) => {
            return (
              <VerticalLayout {...props} permission="admin">
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </VerticalLayout>
            );
          }}
        </ContextLayout.Consumer>
      );
    }}
  />
);
// const mapStateToProps = state => {
//   return {
//     user: state.auth.login.userRole
//   }
// }

const AppRoute = RouteConfig;

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute
            exact
            path="/admin/Dashboard/profile/:id"
            component={Home}
          />
          <AppRoute exact path="/admin/dashboard" component={Dashboards} />
          <AppRoute exact path="/admin/courses" component={Courses} />
          <AppRoute exact path="/admin/addcourse" component={AddCourse} />
          <AppRoute exact path="/editcourse/:id" component={EditCourse} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
