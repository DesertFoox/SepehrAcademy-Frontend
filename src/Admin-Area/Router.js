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

const Page2 = lazy(() => import("./screens/Page2"));

const login = lazy(() => import("./screens/login/Login"));

const Dashboards = lazy(() => import("./screens/Dashboard/Dashboard"));

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
          <AppRoute exact path="/admin/Dashboard/profile" component={Home} />
          <AppRoute path="/admin/dashboard" component={Dashboards} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
