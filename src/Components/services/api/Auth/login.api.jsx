import { setItemGeneric } from "../../storage/storage";
import http from "../http-service.api";
import jwt_decode from "jwt-decode";
import {toast} from 'react-toastify'
// main url of backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const LogInUser = async (user) => {
  try {
    // call api
    const result = await http.post(MainUrl + "auth/login", user);
    const jwtToken = result.data.result.jwtToken;
    const kwt = result.data;

    console.log(kwt);

    setItemGeneric("token", jwtToken);
    
    const decode = jwt_decode(jwtToken);

    setItemGeneric('role',decode.role);
    window.location = "/user/dashboard";

  } catch (error) {
    console.log(error.response.data.message[0].message);
    toast.error(error.response.data.message[0].message, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
