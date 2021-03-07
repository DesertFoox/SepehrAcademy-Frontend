import { Route, Redirect } from "react-router-dom";
import { getItem } from "../../services/storage/storage";
const Islogged = (path, comp) => {
  let CheckIslog = getItem("token") ? (
    <Route exact path={path} component={comp} />
  ) : (
    <Redirect to="/login" />
  );

  return CheckIslog;
};

export default Islogged;
