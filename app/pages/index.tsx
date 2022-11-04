import type { NextPage } from "next";
import styled from "@emotion/styled";
import NewsHeader from "components/news-header";
import NewsMain from "components/news-main";
import NewsArticles from 'components/news-articles'
import { News } from "interfaces/news";

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
  const items = await res.json();
  return {
    props: {
      items,
    },
  };
}

type Props = {
  items: News[];
};

const Home: NextPage<Props> = ({ items }: Props) => {
  return (
    <NewsContainer>
      <NewsHeader />
      <NewsMain />
      <NewsArticles items={items} />
    </NewsContainer>
  );
};

export default Home;
