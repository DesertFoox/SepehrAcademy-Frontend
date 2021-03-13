import "./App.css";
import Routers from "../Components/Routers/Routers";
import AdminRouter from "../Admin-Area/Router";
import UserRouter from "../Components/Routers/Protectedroutes";
import {
  getItem,
  getItemGeneric,
} from "../Components/services/storage/storage";
const App = () => {
  let IsLogged = getItem("token");
  let IsAdmin = getItemGeneric("role");
  return (
    <div className="App">
      {IsLogged ? (
        IsAdmin == "student" ? (
          <UserRouter />
        ) : (
          <AdminRouter />
        )
      ) : (
        <Routers />
      )}
    </div>
  );
};

export default App;
