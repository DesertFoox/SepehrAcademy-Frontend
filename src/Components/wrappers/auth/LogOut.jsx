
import { removeItem } from "../../services/storage/storage";

const LogOut = () => {
  removeItem("token");
  window.location = "/";
};

export default LogOut;
