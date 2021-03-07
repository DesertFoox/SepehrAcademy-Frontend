
import { removeItem } from "../../services/storage/storage";

const LogOut = () => {
  removeItem("token");
};

export default LogOut;
