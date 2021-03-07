import axios from "axios";
import { getItem } from "../storage/storage";
import { toast } from "react-toastify";
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const expectedError =
      error.response &&
      error.response.state >= 400 &&
      error.response.status < 500;

    if (error.response && error.response.status == 401) {
      toast.error("ایمیل یا کد ملی شما قبلا در سیستم وارد شده است");
    }
    if (!expectedError) {
      console.log(error.response.data.message.message[0]);
      toast.error(error.response.data.message.message[0].message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    return Promise.reject(error);
  }
);

// will send token to headers request ( in x-auth-token body )
axios.interceptors.request.use((config) => {
  config.headers["x-auth-token"] = getItem("token");
  return config;
});

export default axios;
