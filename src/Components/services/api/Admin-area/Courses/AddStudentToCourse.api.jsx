import http from "../../http-service.api";
import Swal from 'sweetalert2'

import { toast } from "react-toastify";
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const AddStudentToCourse = async (studentId, teid) => {
  try {
    let res = await http.post(MainUrl + `term/addStudentToTerm/${studentId}`, {
      termId: teid,
    });
    Swal.fire('عملیات موفقیت امیز', 'شما با موفقیت در دوره ثبت نام شدید', 'success')
    return res;
  } catch (error) {
    Swal.fire(error.response.data.message[0].message, error.response.data.message[0].message, 'error')

  }
};
export default AddStudentToCourse;
