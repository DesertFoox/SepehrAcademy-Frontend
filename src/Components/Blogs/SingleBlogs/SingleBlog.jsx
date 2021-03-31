import React, { useEffect, useState } from "react";
import classes from "../../Authorization/Login/css/login.module.css";
import Header from "../../Header/Header";
import LastestNews from "../LatestNewsBlogs/LastestNewsblog";
import "./css/Singleblog.css";
import singlelog from "../../services/api/Admin-area/blogs/eachBlog.api";
import { Fragment } from "react";
import Comment from "../../Comment/Comment";
import { MDBBadge, MDBBtn } from "../../../Assets/mdbreact/mdbreact";

const Singleblog = (props) => {
  const [Blog, setBlog] = useState([]);
  const [BlogComment, setBlogComment] = useState({
    comments: "",
  });
  const [BlogUserNameComment, setBlogUserNameComment] = useState({
    username: "",
  });
  const [userComment, setuserComment] = useState([]);

  const CreateComment = () => {
    setuserComment([
      ...userComment,
      {
        _id: Math.floor(Math.random() * 100),
        username: BlogUserNameComment.username,
        comments: BlogComment.comments,
      },
    ]);
    setBlogComment({ comments: "" });
    setBlogUserNameComment({ username: "" });
  };

  const CommentAnsewr = (id, uname, uc) => {
    setuserComment([
      ...userComment,
      {
        _id: id * 2,
        commentansewr: {
          _id: id,
          username: BlogUserNameComment.username,
          comments: BlogComment.comments,
        },
      },
    ]);
    setBlogComment({ comments: "" });
    setBlogUserNameComment({ username: "" });
  };

  const singBlog = async () => {
    let res = await singlelog(props.match.params.id);
    setBlog([res]);
  };

  useEffect(() => {
    singBlog();
  }, [userComment]);
  return (
    <React.Fragment>
      <div className={classes.shape1_holder}></div>
      <Header mgr={"196px"} />
      <div className="container mt-5 fonts rtl">
        {Blog.map((item) => (
          <Fragment>
            <h1 className="text-center news nass">{item.title}</h1>
            <div key={item._id} className="row mt-5 w-100 mx-auto">
              <div className="card col p-4 holder-content new-titles h-50">
                <img
                  className="img-fluid content-img mb-4"
                  src={require("../../../Assets/images/sali.png").default}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-text text-justify mb-5 text-p">
                    {item.text}
                  </h4>
                  <Comment
                    BlogComment={BlogComment.comments}
                    BlogUserNameComment={BlogUserNameComment.username}
                    setBlogComment={setBlogComment}
                    setBlogUserNameComment={setBlogUserNameComment}
                    CreateComment={CreateComment}
                  />{" "}
                  <div className="w-100">
                    {userComment.map((item) =>
                      item.username && item.comments ? (
                        <Fragment>
                          {" "}
                          <div
                            key={item.id}
                            className="mb-3 comment p-3 col-lg-12 w-25 border"
                          >
                            <div className="d-flex justify-content-start">
                              <h3 className=" ">
                                {item.username}
                                <MDBBadge className="mr-3" color="primary">
                                  نوشته{" "}
                                </MDBBadge>
                              </h3>{" "}
                            </div>

                            <div className="">
                              <h5 className="text-justify">{item.comments}</h5>
                            </div>
                            <div className="d-flex justify-content-end">
                              <MDBBtn
                                onClick={() =>
                                  CommentAnsewr(
                                    item._id,
                                    item.username,
                                    item.comments
                                  )
                                }
                                color="success"
                              >
                                پاسخ
                              </MDBBtn>
                            </div>
                          </div>
                          {/* //comment ansewr */}
                          <div className="d-flex justify-content-end">
                            {userComment.map(
                              (its) =>
                                its.commentansewr &&
                                its.commentansewr._id === item._id && (
                                  <div
                                    key={its.keyid}
                                    className="mb-3 comment p-3 col-lg-12 w-25 border"
                                  >
                                    <div className="d-flex justify-content-start">
                                      <h3 className=" ">
                                        {its.commentansewr.username}
                                        <MDBBadge
                                          className="mr-3"
                                          color="success"
                                        >
                                          پاسخ به نوشته
                                        </MDBBadge>
                                      </h3>{" "}
                                    </div>

                                    <div className="">
                                      <h5 className="text-justify">
                                        {its.commentansewr.comments}
                                      </h5>
                                    </div>
                                  </div>
                                )
                            )}
                          </div>
                        </Fragment>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))}

        <LastestNews />
      </div>
    </React.Fragment>
  );
};

export default Singleblog;
