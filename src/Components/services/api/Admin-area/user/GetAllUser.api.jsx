import http from "../../http-service.api";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const GetCourse = async () => {
  try {
    const result = await http.get(MainUrl + "student/getall");
    const ResultData = result.data.result;
    console.log(ResultData)
    return ResultData;
  } catch {
    return {};
  }
};
export default GetCourse;
