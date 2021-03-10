import http from "../http-service.api";
import { toast } from "react-toastify";
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const RegisterUser = async (userRegiste) => {
  try {
    await http.post(MainUrl + "auth/register", userRegiste);
  } catch (error) {
    console.log();
    toast.error(error.response.data.message[0].message, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return {};
  }
};
