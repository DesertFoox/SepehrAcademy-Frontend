import React, { useState, useEffect } from "react";

//styles
import classes from "../css/Courses.module.css";
import { getUserInformation } from "../../Components/services/storage/storage";

const Profile = () => {
  const [userStatus, setUserStatus] = useState([]);

  const UserInformation = async () => {
    let user = JSON.parse(getUserInformation("userinf"));
    setUserStatus([user]);
  };
  useEffect(() => {
    UserInformation();
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="container mt-4">
          <div className="container">
            <img
              className="img-fluid"
              src={
                require("../../Assets/images/woman-holding-her-head-3280131.svg")
                  .default
              }
            />
            <div className="col bg-white profholder mt-2 mb-2">
              <div className="row">
                <h4 className="col-6 mx-auto my-2" id={classes.name}>
                  { userStatus.length > 0 && userStatus.map((user) =>
                    user.fullName.length > 6
                      ? user.fullName.substr(0, 6)
                      : user.fullName
                  )}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
