import React from "react";
import { Redirect } from "react-router-dom";
import { removeItem } from "../../services/storage/storage";

const LogOut = () => {
  removeItem("token");
};

export default LogOut;
