import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";
import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { number } from "prop-types";

const Paginations = ({ postsPerPage, totalPosts, paginate,allPages,currentPage }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  
  return (
    <Fragment>
      <div className="row mx-auto">
        <MDBPagination circle>
          <MDBPageItem disabled>
            <MDBPageNav className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </MDBPageNav>
          </MDBPageItem>
          {pageNumber.map((number) => (
            <MDBPageItem key={number}>
              <MDBPageNav
                onClick={()=> paginate(number)}
                className={[
                  "page-link",
                  number === currentPage ? "colored" : "",
                ].join(" ")}
              >
                {number}
              </MDBPageNav>
            </MDBPageItem>
          ))}
          <MDBPageItem>
            <MDBPageNav className="page-link">&raquo;</MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
      </div>
     
    </Fragment>
  );
};

export default Paginations;
