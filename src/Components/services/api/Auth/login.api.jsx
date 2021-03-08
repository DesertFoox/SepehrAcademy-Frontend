import { setItemGeneric } from "../../storage/storage";
import http from "../http-service.api";
import jwt_decode from "jwt-decode";

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
    return true;

  } catch (error) {
    return false;
  }
};
