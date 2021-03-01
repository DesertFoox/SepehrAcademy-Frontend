import axios from "axios";
import { getItem } from "../storage/storage";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // check if error is expected from backend
    const expectedError =
      error.response &&
      error.response.state >= 400 &&
      error.response.status < 500;
    
    // if error doesnt expected when we log it  
    if (!expectedError) {
      // tweak it later
      // get error message from backend (see object of response later... maybe its changed)
      console.log(error.response.data.message[0]);
    }
    return Promise.reject(error);
  }
);

// will send token to headers request ( in x-auth-token body )
axios.interceptors.request.use((config) => {
  config.headers["x-auth-token"] = getItem("token");
  return config;
});

export default axios;
