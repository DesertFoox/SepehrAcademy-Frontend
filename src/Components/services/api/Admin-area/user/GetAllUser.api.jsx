import http from "../../http-service.api";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const GetCourse = async () => {
  try {
    const result = await http.get(MainUrl + "student/getall");
    return result.data.result;
  } catch {
    return {};
  }
};
export default GetCourse;
