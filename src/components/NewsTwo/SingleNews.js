import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleNews = ({ news = {} }) => {
  const { title, imageUrl, id, blogDate , authorDetails, description} = news;

  let date = new Date(blogDate);
  return (
    <Col xl={4} lg={4} className="animated fadeInUp">
      <div className="news-two__single">
        <div className="news-two__img-box">
          <div className="news-two__img">
            <Image src={imageUrl} alt="" />
            <Link href={`/news/${id}`}>
              <a>
                <i className="fa fa-plus"></i>
              </a>
            </Link>
          </div>
          <div className="news-two__date">
            <p>{date.toDateString()}</p>
          </div>
        </div>
        <div className="news-two__content">
          <ul className="list-unstyled news-two__meta">
            <li>
              <a href="#">
                <i className="far fa-user-circle"></i> {authorDetails}
              </a>
            </li>
          </ul>
          <h3>
            <Link href={`/news/${id}`}>{title}</Link>
          </h3>
          <p className="news-two__text">{description}</p>
        </div>
      </div>
    </Col>
  );
};

export default SingleNews;
