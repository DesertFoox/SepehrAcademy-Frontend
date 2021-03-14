import { setItemGeneric, setUserInformation } from "../../storage/storage";
import http from "../http-service.api";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
// main url of backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const EmployeeLogin = async (adminData) => {
  try {
    // call api
    const result = await http.post(MainUrl + "auth/employee/login", adminData);
    const jwtToken = result.data.result.jwtToken;
    setItemGeneric("token", jwtToken);
    const decode = jwt_decode(jwtToken);
    setItemGeneric("role", decode.role);

    //get user information
    const userinformation = result.data.result.studentModel;
    setUserInformation("userinf", JSON.stringify(userinformation));
    window.location = `/admin`;
    // window.location = `/user/dashboard/${userinformation._id}`;
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
