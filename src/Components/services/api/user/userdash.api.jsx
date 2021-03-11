import http from "../http-service.api";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const UserDash = async () => {
  const result = await http.post(MainUrl + "auth/login");
  const resultData = result.data
  console.log(resultData);
};
export default UserDash;
