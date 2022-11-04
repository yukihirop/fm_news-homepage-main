import type { NextPage } from "next";
import styled from "@emotion/styled";
import NewsHeader from "components/news-header";
import NewsMain from "components/news-main";
import NewsArticles from "components/news-articles";
import { News } from "interfaces/news";
import { Article } from "interfaces/article";

const NewsContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 1rem;
  max-width: 986px;
  margin: auto;
`;

export async function getServerSideProps() {
  const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";
  const res = await fetch(`${baseURL}/api/news`);
  const news = await res.json();
  const res2 = await fetch(`${baseURL}/api/articles`);
  const articles = await res2.json();
  return {
    props: {
      news,
      articles,
    },
  };
}

type Props = {
  news: News[];
  articles: Article[];
};

const Home: NextPage<Props> = ({ news, articles }: Props) => {
  return (
    <NewsContainer>
      <NewsHeader />
      <NewsMain items={news} />
      <NewsArticles items={articles} />
    </NewsContainer>
  );
};

export default Home;
