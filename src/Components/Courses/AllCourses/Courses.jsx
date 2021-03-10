import React, { useState, useEffect, Fragment } from "react";
import Header from "../../Header/Header";
import GetCourse from "../../services/api/course/getCourse.api";
import getTermInf from "../../services/api/course/term.api";
import Pagination from "../../Pagination/Pagination";
import Course from "./Course";
import det from "./css/det.module.css";

const Courses = () => {
  //paginate
  const [term, setTerm] = useState([]);
  const [loading, Setloading] = useState(false);
  const [currentpage, SetCurrentPage] = useState(1);
  const [postPerPage] = useState(3);

  const LoadTerm = async () => {
    Setloading(true);

    const res = await getTermInf();
    setTerm(res);
    Setloading(false);

  };
  useEffect(() => {
    LoadTerm();
  }, []);

  //get Current course
  const indexOfLastPost = currentpage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const CurrentPost = term.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => SetCurrentPage(pageNumber);

  return (
    <Fragment>
      <div className={det.shape1_holder}></div>
      <Header mgr={"93px"}/>
      <div className={det["courses_holder"]}>
        <div className={det["courses_header"]}>دوره ها</div>
        <Course terms={CurrentPost} Loading={loading} />
        <div className="d-flex justify-content-center mt-4">
          <Pagination
            postsPerPage={postPerPage}
            totalPosts={term.length}
            paginate={paginate}
            allPages={term.length}
            currentPage={currentpage}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Courses;
