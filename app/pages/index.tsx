import type { NextPage } from "next";
import styled from "@emotion/styled";
import NewsHeader from "components/news-header";
import NewsMain from "components/news-main";
import NewsArticles from "components/news-articles";
import { News } from "interfaces/news";
import { Article } from "interfaces/article";

const NewsContainer = styled.div`
  width: 100%;
  max-width: 986px;
  height: fit-content;
  min-height: 780px;
  padding: 1rem;
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
    <main>
      <NewsContainer>
        <NewsHeader />
        <NewsMain items={news} />
        <NewsArticles items={articles} />
      </NewsContainer>
    </main>
  );
};

export default Home;
