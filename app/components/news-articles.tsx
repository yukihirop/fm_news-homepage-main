import React from "react";
import styled from "@emotion/styled";
import { Article } from "interfaces/article";
import { md } from "styles/media-query";

const NewsArticlesContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  gap: 2rem;

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
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  color: var(--dark-grayish-blue);
`;

type NewsArticlesProps = {
  items: Article[];
};

const NewsArticles = ({ items }: NewsArticlesProps) => {
  return (
    <NewsArticlesContainer>
      {items.map((item, index) => (
        <NewsArticlesCard key={index}>
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
  );
};

export default NewsArticles;
