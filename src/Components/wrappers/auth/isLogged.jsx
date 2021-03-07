import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { getItem } from "../../services/storage/storage";

const Islogged = (path, comp) => {
  let CheckIslog = getItem("token") && <Route path={path} component={comp} />;
  console.log(<Route path={path} component={comp} />);
  return CheckIslog;
};

export default Islogged;
