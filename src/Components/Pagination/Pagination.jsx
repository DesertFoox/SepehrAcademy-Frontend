import React, { useEffect } from "react";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
} from "../../Assets/mdbreact/mdbreact";
import { Fragment } from "react";

const Paginations = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <Fragment>
      <div className="row mx-auto">
        <MDBPagination circle>
          <MDBPageItem>
            <MDBPageNav className="page-link" aria-label="Previous">
              <span
                onClick={() =>
                  paginate(
                    pageNumber.length < currentPage
                      ? currentPage - 1
                      : (currentPage = 1)
                  )
                }
                aria-hidden="true"
              >
                &laquo;
              </span>
              <span className="sr-only">Previous</span>
            </MDBPageNav>
          </MDBPageItem>
          {pageNumber.map((number) => (
            <MDBPageItem key={number}>
              <MDBPageNav
                onClick={() => paginate(number)}
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
            <MDBPageNav
              onClick={() =>
                paginate(
                  pageNumber.length > currentPage
                    ? currentPage + 1
                    : (currentPage = 1)
                )
              }
              className="page-link"
            >
              &raquo;
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
      </div>
    </Fragment>
  );
};

export default Paginations;
