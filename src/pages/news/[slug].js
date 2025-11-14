import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import NewsDetailsPage from "../../components/NewsDetailsPage/NewsDetailsPage";
import React from "react";
import { useRouter } from "next/router";
import services from './../../services/services';

const NewsDetailsPageNew = () => {
  const {getBlogDetails} = services()
  const router = useRouter();
  
  const [blogDetails, setBlogDetails] = React.useState(null);

  const {
    query: { slug },
  } = router;

  const setUpBlogDetails = async () => {
    // if(!slug)setUpBlogDetails()
    let data = await getBlogDetails(slug);
    if (data) {
      setBlogDetails(data);
    }
  };

  React.useEffect(() => {
    slug && setUpBlogDetails();
  }, [slug]);

  return (
    <Layout pageTitle={blogDetails && blogDetails.title || `Blog Details`}>
      <PageHeader pageTitle={blogDetails && blogDetails.title || "Blog Details"} />
      <NewsDetailsPage blogDetails={blogDetails}/>
    </Layout>
  );
};
export default NewsDetailsPageNew;
