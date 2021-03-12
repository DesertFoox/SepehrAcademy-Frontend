import http from "../../http-service.api";

import { toast } from "react-toastify";
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
 const AddCourse = async (Course,courseid) => {
  try {
    await http.post(MainUrl + `term/${courseid}`, Course);
    toast.success("دوره شما با موفقیت ساخته شد");
  } catch (error) {
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
export default AddCourse;