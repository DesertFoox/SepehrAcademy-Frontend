import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./core/utils/context/Layout"
import VerticalLayout from './layouts/VerticalLayout';
import '../Admin-Area/index.scss'
// Route-based code splitting
const Home = lazy(() =>
  import("./screens/Home")
)

const Page2 = lazy(() =>
  import("./screens/Page2")
)

const login = lazy(() =>
  import("./screens/login/Login")
)

const Dashboard = lazy(() =>
  import("./screens/Dashboard/Dashboard")
)



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
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
              return (
                <VerticalLayout {...props} permission="admin">
                  <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                  </Suspense>
                </VerticalLayout>
              )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
// const mapStateToProps = state => {
//   return {
//     user: state.auth.login.userRole
//   }
// }

const AppRoute = RouteConfig

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute
            exact
            path="/Dashboard/profile"
            component={Home}
          />
          <AppRoute
            path="/page2"
            component={Page2}
          />
          <AppRoute
            path="/pages/login"
            component={login}
            fullLayout
          />
          <AppRoute
            path="/dashboard"
            component={Dashboard}
          />          
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
