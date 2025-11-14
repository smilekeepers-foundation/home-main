import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const SingleNews = ({ news = {} }) => {
  const { title, imageUrl, id, blogDate } = news;
  let date = new Date(blogDate);


  return (
    <div className="news-one__right-single">
      <div className="news-one__right-img">
        <Image src={imageUrl} alt="" />
        <Link href={"/news/" + id}>
          <a>
            <i className="fa fa-plus"></i>
          </a>
        </Link>
      </div>
      <div className="news-one__right-content">
        <ul className="list-unstyled news-one__right-meta">
          <li>{date.toDateString()}</li>
         
        </ul>
        <h3 className="news-one__right-title">
          <Link href={"/news/" + id}>
            <a>{title}</a>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default SingleNews;
