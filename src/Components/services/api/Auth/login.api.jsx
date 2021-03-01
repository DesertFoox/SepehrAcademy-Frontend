import { setItem } from "../../storage/storage";
import http from "../http-service.api";

// main url of backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const LogInUser = async (user) => {
  try {
    // call api
    const result = await http.post(MainUrl + "auth/login", user);

    setItem("token", result.data.result.jwtToken);
    // return jwtToken 
    return result.data.result.jwtToken;
  } catch (error) {
    // return empty object if api faill
    return {};
  }
};
