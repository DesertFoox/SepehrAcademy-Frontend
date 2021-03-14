import http from "../http-service.api";
import { toast } from "react-toastify";
import { Redirect } from "react-router";
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const EmployeeRegister = async (adminRegiste) => {
  try {
    await http.post(MainUrl + "auth/employee/register", adminRegiste);
    toast.success("ثبت نام شما با موفقیت انجام شد");
    setTimeout(() => {
      <Redirect to="/admin" />;
    }, 3000);
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
