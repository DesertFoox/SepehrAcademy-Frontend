
import { clearStorage } from "../../services/storage/storage";

const LogOut = () => {
  clearStorage();
  window.location = "/";
};

export default LogOut;
