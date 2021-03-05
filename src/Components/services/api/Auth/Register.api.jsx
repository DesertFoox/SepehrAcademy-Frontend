import http from "../http-service.api";
import { toast } from "react-toastify";
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const RegisterUser = async (userRegiste) => {
  try {
    // call api
    await http.post(MainUrl + 
      , userRegiste);
  } catch (error) {

    // return empty object if api faill
    return {};
  }
};
