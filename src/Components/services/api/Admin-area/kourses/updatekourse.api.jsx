import http from "../../http-service.api";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const UpdateKourse = async (id,kourse) => {
  const result = await http.put(MainUrl + "course/" + id,kourse);
  const ResultData = result.data.result;
  return ResultData;
};

export default UpdateKourse;
