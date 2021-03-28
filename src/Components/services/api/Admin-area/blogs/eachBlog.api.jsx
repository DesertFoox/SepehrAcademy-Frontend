import http from "../../http-service.api";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const EachBlog = async (id) => {
  const result = await http.get(MainUrl + "news/" + id);
  const ResultData = result.data.result;
  return ResultData;
};

export default EachBlog;
