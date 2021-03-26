import React, { useEffect, useState } from "react";
import getBlogs from "../../services/api/Admin-area/blogs/getBlogs.api";
import { Link } from "react-router-dom";
const LastestNews = () => {
  const [LastNews, setLastNews] = useState([]);
  const [filteredNews, setfilteredNews] = useState();

  const Getblog = async () => {
    let news = await getBlogs();
    setLastNews(news);
    let res = LastNews.filter((item) => item.title.length > 8);
    setfilteredNews(res);
  };
  
  

  useEffect(() => {
    Getblog();
  }, [filteredNews]);
  return (
    <React.Fragment>
      <div className="row mt-5">
        <div className="col-lg-6 col-sm-12">
          <h2 className="text-center mt-2 newakh">جدیدترین اخبار</h2>
          <ul className=" mt-5 text-center new-titles w-100 mx-auto">
            {filteredNews &&
              filteredNews.map((item) => (
                <li className="font-weight-normal  px-3 py-4 mt-3 ">
                  <h3>
                    <Link to={`/Blog/${item._id}`}>{item.title}</Link>
                  </h3>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h2 className="text-center mt-2 newakh">جدیدترین اخبار</h2>
          <ul className=" mt-5 text-center new-titles  bg-light   w-100 mx-auto">
            {filteredNews &&
              filteredNews.map((item) => (
                <li className="font-weight-normal  px-3 py-4 mt-3 ">
                  <h3>{item.title}</h3>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LastestNews;
