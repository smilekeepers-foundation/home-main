import { social } from "@/data/NavItems";
import React from "react";
import { Image } from "react-bootstrap";


const NewsDetailsLeft = ({blogDetails}) => {

  if (!blogDetails) return null;

  return (
    <div className="news-details__left">
      <div className="news-details__img">
        <Image src={blogDetails.imageUrl} alt="" />
      </div>
      <div className="news-details__content">
        <ul className="list-unstyled news-details__meta">
          <li>
            <a href="#">
              <i className="far fa-user-circle"></i> by {blogDetails.authorDetails}
            </a>
          </li>
        </ul>
        <h3 className="news-details__title">{blogDetails.title}</h3>
        <p className="news-details__text-one">{blogDetails.blogContent}</p>
        {/* <p className="news-details__text-two">{textTwo}</p>
        <p className="news-details__text-three">{textThree}</p> */}
      </div>
      <div className="news-details__bottom">
        {/* <p className="news-details__tags">
          <span>Tags: </span>
          {tags.map((tag, i) => (
            <a key={i} href="#">
              {tag}
            </a>
          ))}
        </p> */}
        <div className="news-details__social-list">
          {social.map(({ icon, href }, index) => (
            <a href={href} key={index}>
              <i className={`fab ${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
      {/* <div className="author-one">
        <div className="author-one__image">
          <Image src={authorImage.src} alt="" />
        </div>
        <div className="author-one__content">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div> */}
    </div>
  );
};

export default NewsDetailsLeft;
