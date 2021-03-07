import http from "../http-service.api";
import { setItem } from "../../storage/storage";
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const forgetPass = async (userForget) => {
  try {
    const result = await http.post(MainUrl + "/forgetpassword", userForget);

    setItem("tkn", result.data.result.jwtToken);

    return result.data.result.jwtToken;
  } catch (error) {
    return {};
  }
};
