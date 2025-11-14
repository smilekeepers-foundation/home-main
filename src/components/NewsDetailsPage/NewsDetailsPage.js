import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsDetailsLeft from "./NewsDetailsLeft";
import Sidebar from "./Sidebar";

const NewsDetailsPage = ({blogDetails}) => {
  return (
    <section className="news-details">
      <Container>
        <Row>
          <Col xl={12} lg={12}>
            <NewsDetailsLeft blogDetails={blogDetails} />
          </Col>
          {/* <Col xl={4} lg={5}>
            <Sidebar />
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default NewsDetailsPage;
