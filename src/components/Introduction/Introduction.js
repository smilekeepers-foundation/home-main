import introduction from "@/data/introduction";
import image from "@/images/resources/intro-img.jpg";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const Introduction = () => {
  return (
    <section className="introduction">
      <Container>
        <Row>
          <Col xl={6} lg={6}>
            <div className="introduction__left">
              <div className="introduction__img">
                <Image src={image.src} alt="" />
              </div>
              <div className="introduction__content">
                <p className="introduction__text">
                  {/* Lorem ipsum simply free tex availa-ble in the market to use
                  anywhere you like or of need */}
                </p>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="introduction__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">Our Introductions</span>
                <h2 className="section-title__title">
                  Welcome to smilekeepers foundation
                </h2>
              </div>
              <p className="introduction__right-text">
                At SmileKeepers Foundation, our mission is to bring hope,
                happiness, and lasting change to the lives of underprivileged
                communities. We believe that every individual deserves a chance
                to thrive, and we are committed to making that belief a reality.
                Our foundation focuses on empowering people through education,
                healthcare, and community development initiatives. By working
                closely with local communities and global partners, we strive to
                create sustainable programs that uplift lives and create a
                brighter future for all. Join us on our journey to spread smiles
                and make a meaningful impact on the world.
              </p>
              <ul className="introduction__icon-wrap list-unstyled">
                {introduction.map(({ id, title, description, icon }) => (
                  <li className="introduction__icon-wrap-single" key={id}>
                    <div className="introduction__icon-box">
                      <span className={icon}></span>
                    </div>
                    <div className="introduction__content-box">
                      <h2>{title}</h2>
                      <p>{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#" className="introduction__btn thm-btn">
                <i className="fas fa-arrow-circle-right"></i>Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Introduction;
