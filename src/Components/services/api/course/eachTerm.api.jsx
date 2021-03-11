import { useParams } from "react-router-dom";
import http from "../http-service.api";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const EachTerm = async (id) => {
  const result = await http.get(MainUrl + "term/" + id);
  const ResultData = result.data.result;
  console.log(ResultData);
  return ResultData;
};

export default EachTerm;
