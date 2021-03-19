import http from "../../http-service.api";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const EachKourse = async (id) => {
  const result = await http.get(MainUrl + "course/" + id);
  const ResultData = result.data.result;
  console.log(ResultData);
  return ResultData;
};

export default EachKourse;
