import http from "../../http-service.api";

import { toast } from "react-toastify";
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const UpdateinfAdmin = async (userinf, id) => {
  try {
    const result = await http.put(MainUrl + "student/" + id, userinf);
    const resultData = result.data;
    console.log(resultData);
  } catch (error) {
    toast.error(error.response.data.message[0].message);
  }
};
export default UpdateinfAdmin;
