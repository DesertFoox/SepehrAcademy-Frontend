import http from "../../http-service.api";
import { setItemGeneric, setUserInformation,removeItem } from "../../../storage/storage";

import { toast } from "react-toastify";
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const Updateinf = async (userinf, id) => {
  try {
    const result = await http.put(MainUrl + `student/${id}`, userinf);
    const resultData = result.data;
    console.log(resultData);
    toast.success("اطلاعات شما با موفقیت تغییر یافت");
    removeItem("userinf");
    const userinformation = result.data.result.studentModel;
    console.log(userinformation)
    setUserInformation("userinf", JSON.stringify(result.data.result));
    window.location = `/edituser/${result.data.result._id}`;
  } catch(error) {
    console.log(error.response.data)
    toast.error(error.response.data);
  }
};
export default Updateinf;
