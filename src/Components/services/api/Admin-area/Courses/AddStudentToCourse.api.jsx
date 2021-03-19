import http from "../../http-service.api";

import { toast } from "react-toastify";
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const AddStudentToCourse = async (studentId, teid) => {
  try {
    let res = await http.post(MainUrl + `term/addStudentToTerm/${studentId}`, {
      termId: teid,
    });
    toast.success(" شما با موفقیت به دوره اضافه شدید ");
    return res;
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
export default AddStudentToCourse;
