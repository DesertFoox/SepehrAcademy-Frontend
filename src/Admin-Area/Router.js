import React, { Suspense, lazy } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { history } from './history'
import Spinner from './components/@vuexy/spinner/Loading-spinner'
import { ContextLayout } from './core/utils/context/Layout'
import VerticalLayout from './layouts/VerticalLayout'
import '../Admin-Area/index.scss'
import NotFound from '../Components/Landing/404/404'
//User Zone
import Dashboard from '../User/Panelholder/Panel'
//wrappers
import IsLogged from '../Components/wrappers/auth/isLogged'
//routes
import Landing from '../Components/Landing/Landing'
import Course from '../Components/Courses/SingleCourse/SingleCourse'
import Courses from '../Components/Courses/AllCourses/Courses'
import AllBlogs from '../Components/Blogs/AllBlogs/Blogs'
import Singleblog from '../Components/Blogs/SingleBlogs/SingleBlog'

// Route-based code splitting
const Home = lazy(() => import('./screens/Home'))

const Dashboards = lazy(() => import('./screens/Dashboard/Dashboard'))

const AdminCourses = lazy(() => import('./screens/Admincourse'))

const AddCourse = lazy(() => import('./screens/AddCourse'))

const EditCourse = lazy(() => import('./screens/UpdateCourse'))

const Users = lazy(() => import('./screens/AdminUser'))

const UpdateStudent = lazy(() => import('./screens/UpdateStudent'))

const Kourses = lazy(() => import('./screens/Kourses'))
const AddKourse = lazy(() => import('./screens/Addkourse'))
const EditKourses = lazy(() => import('./screens/Editkourse'))

const Adminblog = lazy(() => import('./screens/AdminBlog'))
const Blogedit = lazy(() => import('./screens/editblog'))
const Addblog = lazy(() => import('./screens/AddBlog'))



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
            path="/admin/Dashboard/profile/:id"
            component={Home}
          />
          <AppRoute exact path="/admin/dashboard" component={Dashboards} />
          <AppRoute exact path="/admin/courses" component={AdminCourses} />

          <AppRoute exact path="/admin/addcourse" component={AddCourse} />
          <AppRoute exact path="/editcourse/:id" component={EditCourse} />

          <AppRoute exact path="/admin/users" component={Users} />
          <AppRoute exact path="/edituser/:id" component={UpdateStudent} />
          <AppRoute exact path="/admin/kourses" component={Kourses} />
          <AppRoute exact path="/editkourse/:id" component={EditKourses} />

          <AppRoute exact path="/admin/blogs" component={Adminblog} />
          <AppRoute exact path="/editblog/:id" component={Blogedit} />
          <AppRoute exact path="/admin/addblog" component={Addblog} />


          <AppRoute exact path="/admin/addkourses" component={AddKourse} />

          <Route exact path="/" component={Landing} />
          <Route exact path="/Courses" component={Courses} />
          <Route exact path="/Course/:id" component={Course} />
          <Route exact path="/Blogs" component={AllBlogs} />
          <Route exact path="/Blog:id?" component={Singleblog} />

          <Route exact path="/user/dashboard/:id" component={Dashboard} />
          <Route exact path="/user/dashboard/myCourses" component={Dashboard} />

          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
