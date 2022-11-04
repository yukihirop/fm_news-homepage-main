import type { NextPage } from "next";
import styled from "@emotion/styled";
import NewsHeader from "components/news-header";
import NewsMain from "components/news-main";
import { News } from "interfaces/news";
import { md } from 'styles/media-query'

const NewsContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 1rem;
  max-width: 986px;
  margin: auto;
`;

const NewsArticlesContainer = styled.section`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between; 
  padding-top: 2rem;
  gap: 1.8rem;

  ${md} {
    flex-direction: column;
  }
`;

const NewsArticlesCard = styled.article`
  width: 33%;
  height: 100px;
  display: flex;
  flex-direction: row;

  ${md} {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;

const NewsArticlesCardImage = styled.img`
  height: 100%;
`;
const NewArticlesCardSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1rem;
  gap: 0.5rem;
`;

const NewsArticlesCardIndex = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--grayish-blue);
`;

const NewsArticlesCardTitle = styled.h1`
  font-size: 1rem;
`;

const NewsArticlesCardDesc = styled.p`
  font-size: .8rem;
  letter-spacing: .5px;
  color: var(--dark-grayish-blue);
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
      <NewsArticlesContainer>
        {items.map((item) => (
          <NewsArticlesCard>
            <figure>
              <NewsArticlesCardImage src={item.image}></NewsArticlesCardImage>
            </figure>
            <NewArticlesCardSection>
              <NewsArticlesCardIndex>{`0${item.index}`}</NewsArticlesCardIndex>
              <NewsArticlesCardTitle>{item.title}</NewsArticlesCardTitle>
              <NewsArticlesCardDesc>{item.desc}</NewsArticlesCardDesc>
            </NewArticlesCardSection>
          </NewsArticlesCard>
        ))}
      </NewsArticlesContainer>
    </NewsContainer>
  );
};

export default Home;
