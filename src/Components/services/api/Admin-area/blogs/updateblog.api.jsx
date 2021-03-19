import http from "../../http-service.api";
import {toast} from 'react-toastify'
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const UpdateBlog = async (id, blog) => {
    try {
        const result = await http.put(MainUrl + `news/${id}`, blog);
        const ResultData = result.data.result;
        toast.success("دوره با موفقیت اپدیت شد");
        return ResultData;
    }
    catch (error) {
        console.log(error.response.data)
        toast.error(error.response.data.message[0].message);
     }

};

export default UpdateBlog;