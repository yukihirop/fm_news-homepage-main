import type { NextPage } from "next";
import styled from "@emotion/styled";
import NewsHeader from "components/news-header";
import NewsMain from "components/news-main"

const NewsContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 1rem;
  max-width: 986px;
  margin: auto;
`;

const Home: NextPage = () => {
  return (
    <NewsContainer>
      <NewsHeader />
      <NewsMain />
    </NewsContainer>
  );
};

export default Home;
