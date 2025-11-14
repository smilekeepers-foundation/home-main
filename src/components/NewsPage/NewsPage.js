import newsPage from "@/data/newsPage";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleNews from "../NewsTwo/SingleNews";
import services from './../../services/services';

const NewsPage = () => {
  const { getBlogList } = services();
  const [newsList, setNewsList] = React.useState(null);
  const setUpNewsList = async () => {
    let data = await getBlogList();
    if (data) {
      setNewsList(data);
    } else {
      setNewsList([]);
    }
  };

  React.useEffect(() => {
    setUpNewsList();
  }, []);
  if (newsList == null || !newsList.length) {
    return null;
  }
  return (
    <section className="news-page">
      <Container>
        <Row>
          {newsList.map((news) => (
            <SingleNews key={news.id} news={news} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewsPage;
