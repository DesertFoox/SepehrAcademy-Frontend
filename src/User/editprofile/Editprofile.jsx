import React, { Component } from "react";
import {

  MDBIcon,
  MDBBtn,
  ToastContainer,
} from "mdbreact";

//styles
import "../css/Courses.css";
import "../css/dash.css";
import "../css/Courses.css";
import EditprofForm from "./form/EditprofileForm copy";

//images
class Editprofile extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    date: "",
  };
  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  classNameHandler = () => {
    let classes = "form-control";
    return classes;
  };

  render() {
    // const Validate = yup.object().shape({
    //   fname: yup.string().required("لطفا فیلد نام را پر کنید").length(3),
    //   lname: yup.string().required("لطفا فیلد نام خانوادگی را پر کنید"),
    //   city: yup.string().required("لطفا فیلد شهر را پر کنید"),
    //   email: yup.string().email().required("لطفا فیلد ایمیل را پر کنید"),
    // });
    // let validatechecker = () => {};
    // onsubmit = (data) => {
    //   console.log(data);
    // };
    // alert = (value) => {
    //   Validate.validate(value)
    //     .then((val) => {})
    //     .catch((val) => {
    //       toast.error(
    //         <MDBIcon icon="exclamation-triangle" />,
    //         "فیلد خالی وجود دارد.لطفا آن را پر کنید ",
    //         {
    //           autoClose: true,
    //         }
    //       );
    //     });
    // };
    const { fname, lname, email, date, classNameHandler, required } = this;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12 px-0">
            <div className="bg-image">
              <img
                src={
                  require("../../Assets/images/woman-holding-her-head-3280131@2x.png")
                    .default
                }
                className="img-fluid imgheight"
                alt="Sample"
              />
              <div className="mask blackbge">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <input id="chngeimg" type="file" />
                  <label className="getimg" htmlFor="chngeimg"></label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mt-4 w-75 mx-auto rtl">
            <form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
            >
              <div className="row">
                <div className="col-md-6 mb-3">
                  <EditprofForm
                    name="fname"
                    type="text"
                    id="defaultFormRegisterNameEx"
                    classnames={classNameHandler() + " changeinput"}
                    value={fname}
                    label="نام"
                    placeholder="نام"
                    required="required"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <EditprofForm
                    name="lname"
                    type="text"
                    id="defaultFormRegisterLNameEx"
                    classnames={classNameHandler() + " changeinput"}
                    value={lname}
                    placeholder=" نام خانوادگی"
                    label=" نام خانوادگی"
                    onChange={this.changeHandler}
                    required="required"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <EditprofForm
                    name="email"
                    type="email"
                    id="defaultFormRegisterEmailEx"
                    classnames={classNameHandler() + " changeinput"}
                    value={email}
                    placeholder="ایمیل"
                    label="ایمیل"
                    onChange={this.changeHandler}
                    required="required"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <EditprofForm
                    name="date"
                    type="text"
                    id="defaultFormRegisterdateEx"
                    classnames={classNameHandler() + " changeinput"}
                    value={date}
                    label="تاریخ تولد"
                    placeholder="تاریخ تولد"
                    onChange={this.changeHandler}
                    required="required"
                  />
                </div>
              </div>

              <div className="s">
                <MDBBtn outline color="secondary" className="btn-md font bigg">
                  لغو
                  <MDBIcon far icon="window-close" brand className="pr-1" />
                </MDBBtn>
                <MDBBtn
                  gradient="purple"
                  className="btn-md font bigg"
                  type="submit"
                >
                  ثبت تغییرات
                  <MDBIcon far icon="check-square"brand  className="pr-1" />
                </MDBBtn>
              </div>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                newestOnTop={true}
                rtl={true}
              ></ToastContainer>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Editprofile;