import React, { Component } from "react";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdbreact";

//styles
import "../../Assets/Styles/login_signup/login.css";

class UserCourses extends Component {
  render() {
    return (
      <React.Fragment>
        {/* respoinsive prof */}
        <div className=" profinfor mt-0 rtl fonts">
          <div className="bg-white ">
            <div className="row">
              <div className="col-4">
                <img
                  className="img-fluid"
                  src={
                    require("../../Assets/images/woman-holding-her-head-3280131.svg")
                      .default
                  }
                />
              </div>
              <div className="col-2 mt-2">
                <p className="ft">آرالما</p>
                <p className="fonts fs">@aralema</p>
              </div>
              <div className="col-3 mr5  mt-5">
                <MDBIcon icon="pen" className="pen" />
              </div>
            </div>
          </div>
        </div>
        {/*ثدی respoinsive prof */}
        <div className="container rtls fonts">
          <img
            id="cart"
            src={require("../../Assets/images/Group 278.svg").default}
          />
          <img
            id="bell"
            src={require("../../Assets/images/Group 277.svg").default}
          />

          <div className="mt-5 sizs">
            <MDBIcon icon="check-square" className="ml-2 bgpin" />
            دوره های من
          </div>

          <table class="table table-striped mt-2">
            <thead>
              <tr>
                <th>تصویر</th>
                <th>نام دوره ها</th>
                <th>سطح</th>
                <th>قیمت</th>
                <th>تاریخ آغاز</th>
                <th>وضعیت</th>
              </tr>
            </thead>

            <tbody>
              <tr className="items">
                <td className="rightrad">
                  <img
                    src={require("../../Assets/images/Path 504.svg").default}
                    className="img-fluid"
                    alt=""
                  />
                </td>
                <td>ریکت مقدماتی تا پیشرفته</td>
                <td>کارگاه</td>
                <td>تومان 150,000</td>
                <td>1399/09/18</td>
                <td className="leftrad">اتمام دوره</td>
              </tr>
              <tr className="items">
                <td className="rightrad">
                  <img
                    src={require("../../Assets/images/Path 504.svg").default}
                    className="img-fluid"
                    alt=""
                  />
                </td>
                <td>ریکت مقدماتی تا پیشرفته</td>
                <td>کارگاه</td>
                <td>تومان 150,000</td>
                <td>1399/09/18</td>
                <td className="leftrad">اتمام دوره</td>
              </tr>{" "}
              <tr className="items">
                <td className="rightrad">
                  <img
                    src={require("../../Assets/images/Path 504.svg").default}
                    className="img-fluid"
                    alt=""
                  />
                </td>
                <td>ریکت مقدماتی تا پیشرفته</td>
                <td>کارگاه</td>
                <td>تومان 150,000</td>
                <td>1399/09/18</td>
                <td className="leftrad">اتمام دوره</td>
              </tr>
              <tr className="items">
                <td className="rightrad">
                  <img
                    src={require("../../Assets/images/Path 504.svg").default}
                    className="img-fluid"
                    alt=""
                  />
                </td>
                <td>ریکت مقدماتی تا پیشرفته</td>
                <td>کارگاه</td>
                <td>تومان 150,000</td>
                <td>1399/09/18</td>
                <td className="leftrad">اتمام دوره</td>
              </tr>
              <tr className="items">
                <td className="rightrad">
                  <img
                    src={require("../../Assets/images/Path 504.svg").default}
                    className="img-fluid"
                    alt=""
                  />
                </td>
                <td>ریکت مقدماتی تا پیشرفته</td>
                <td>کارگاه</td>
                <td>تومان 150,000</td>
                <td>1399/09/18</td>
                <td className="leftrad">اتمام دوره</td>
              </tr>
            </tbody>
          </table>
          {/* risponsive Courses */}
          <div className="row">
            <div className="col-6 items hg ml-2">
              <img
                src={require("../../Assets/images/Path 504.svg").default}
                className="img-fluid sizess mt-4"
                alt=""
              />
              <p>ریکت مقدماتی تا پیشرفته</p>
            </div>
            <div className="col-6 items hg ">
              <img
                src={require("../../Assets/images/Path 504.svg").default}
                className="img-fluid sizess mt-4"
                alt=""
              />
              <p>ریکت مقدماتی تا پیشرفته</p>
            </div>
          </div>
          {/* risponsive Courses */}
          <div className="d-flex justify-content-center mt-3">
            <MDBRow>
              <MDBCol>
                <MDBPagination circle>
                  <MDBPageItem disabled>
                    <MDBPageNav className="page-link" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </MDBPageNav>
                  </MDBPageItem>
                  <MDBPageItem active>
                    <MDBPageNav className="page-link colored">
                      1 <span className="sr-only">(current)</span>
                    </MDBPageNav>
                  </MDBPageItem>
                  <MDBPageItem>
                    <MDBPageNav className="page-link">2</MDBPageNav>
                  </MDBPageItem>
                  <MDBPageItem>
                    <MDBPageNav className="page-link">3</MDBPageNav>
                  </MDBPageItem>
                  <MDBPageItem>
                    <MDBPageNav className="page-link">4</MDBPageNav>
                  </MDBPageItem>
                  <MDBPageItem>
                    <MDBPageNav className="page-link">5</MDBPageNav>
                  </MDBPageItem>
                  <MDBPageItem>
                    <MDBPageNav className="page-link">&raquo;</MDBPageNav>
                  </MDBPageItem>
                </MDBPagination>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserCourses;
