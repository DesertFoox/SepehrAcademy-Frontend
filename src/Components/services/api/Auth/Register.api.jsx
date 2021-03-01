import http from "../http-service.api";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const RegisterUser = async (user) => {
  try {
    await http.post(MainUrl + "auth/register", user);
  } catch (error) {
    return {};
  }
};
