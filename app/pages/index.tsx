import type { NextPage } from "next";
import styled from "@emotion/styled";
import { sm } from "styles/media-query";
import NewsHeader from "components/news-header";

const NewsContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 1rem;
  max-width: 1143px;
  margin: auto;
`;

const NewsMainContainer = styled.main`
  margin-top: 2rem;
  height: fit-content;
  display: flex;

  //
  border: solid 1px black;

  ${sm} {
    flex-direction: column;
  }
`;
const NewsMainArticle = styled.article`
  width: 70%;
  margin-right: 2rem;
`;

const NewsMainArticleHero = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;

const NewsMainArticleHeroTitle = styled.h1`
  font-weight: 800;
  font-size: 3.5rem;
  width: 50%;
  margin-right: 1rem;
`;

const NewsMainArticleHeroDescriptionSection = styled.section`
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const NewsMainArticleHeroDescription = styled.p`
  font-size: var(--paragraph);
  color: var(--dark-grayish-blue);
`;

const NewsMainArticleHeroReadMore = styled.button`
  background: var(--soft-red);
  font-weight: 600;
  padding: 1rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  width: fit-content;
`;

const NewsMainArticleHeroImg = styled.img`
  width: 100%;
  aspect-ratio: inherit;
`;

const NewsMainAside = styled.aside`
  /* min-width: 300px; */
  border: solid 1px black;
`;

const Home: NextPage = () => {
  return (
    <NewsContainer>
      <NewsHeader />
      <NewsMainContainer>
        <NewsMainArticle>
          <figure>
            <NewsMainArticleHeroImg src="images/image-web-3-desktop.jpg" />
          </figure>
          <NewsMainArticleHero>
            <NewsMainArticleHeroTitle>
              The Bright Future of Web 3.0?
            </NewsMainArticleHeroTitle>
            <NewsMainArticleHeroDescriptionSection>
              <NewsMainArticleHeroDescription>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </NewsMainArticleHeroDescription>
              <NewsMainArticleHeroReadMore>
                Read More
              </NewsMainArticleHeroReadMore>
            </NewsMainArticleHeroDescriptionSection>
          </NewsMainArticleHero>
        </NewsMainArticle>
        <NewsMainAside></NewsMainAside>
      </NewsMainContainer>
    </NewsContainer>
  );
};

export default Home;
