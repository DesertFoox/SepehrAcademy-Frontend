import React from "react";
import { MDBInput, MDBBtn } from "../../Assets/mdbreact/mdbreact";
const Comments = ({
  setBlogUserNameComment,
  setBlogComment,
  CreateComment,
  BlogComment,
  BlogUserNameComment,
}) => {
  return (
    <div style={{ direction: "rtl" }} className="form-group w-50">
      <div className="">
        <MDBInput
          value={BlogUserNameComment}
          className="row"
          onChange={(e) => setBlogUserNameComment({ username: e.target.value })}
          label="نام شما"
          outline
        />
      </div>

      <label htmlFor="exampleFormControlTextarea1">نوشته شما</label>
      <textarea
        value={BlogComment}
        onChange={(e) => setBlogComment({ comments: e.target.value })}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="5"
      />
      <div className="justify-content-start d-flex">
        <MDBBtn onClick={CreateComment} color="primary" rounded>
          ثبت
        </MDBBtn>
      </div>
    </div>
  );
};

export default Comments;
