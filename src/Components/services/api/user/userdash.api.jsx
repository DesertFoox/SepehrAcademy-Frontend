import http from "../http-service.api";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const UserDash = async (userinf) => {
  const result = await http.put(MainUrl + "auth/login", userinf);
  const resultData = result.data;
  console.log(resultData);
};
export default UserDash;
