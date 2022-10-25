import styled from "@emotion/styled";
import { sm } from "styles/media-query";
import { News } from "interfaces/news";

const NewsMainContainer = styled.main`
  margin-top: 2rem;
  height: fit-content;
  display: flex;

  ${sm} {
    flex-direction: column;
  }
`;
const NewsMainArticle = styled.article`
  width: 70%;
  margin-right: 2rem;

  ${sm} {
    width: 100%;
  }
`;

const NewsMainArticleHero = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;

  ${sm} {
    flex-direction: column;
  }
`;

const NewsMainArticleHeroTitle = styled.h1`
  font-weight: 800;
  font-size: 3.5rem;
  width: 50%;
  padding-bottom: 1rem;
  margin-right: 1rem;
  line-height: 3.5rem;

  ${sm} {
    width: 100%;
  }
`;

const NewsMainArticleHeroDescSection = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${sm} {
    width: 100%;
  }
`;

const NewsMainArticleHeroDesc = styled.p`
  font-size: var(--paragraph);
  color: var(--dark-grayish-blue);
  line-height: 1.5rem;
  margin-bottom: 1rem;
`;

const NewsMainArticleHeroReadMore = styled.button`
  background: var(--soft-red);
  font-weight: 600;
  padding: 1rem 1.5rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  width: fit-content;

  &:hover {
    background: var(--very-dark-blue);
  }
`;

const NewsMainArticleHeroImg = styled.img`
  width: 100%;
  aspect-ratio: inherit;
`;

const NewsMainAside = styled.aside`
  width: 280px;
  padding: 1rem;
  background: var(--very-dark-blue);
  color: var(--off-white);

  //
  border: solid 1px black;

  ${sm} {
    margin-top: 2rem;
    width: 100%;
  }
`;

const NewsMainAsideTitle = styled.h2`
  color: var(--soft-orange);
  font-size: 1.8rem;
  font-weight: 700;
`;

const NewsMainAsideContent = styled.ul`
  list-style: none;
`;
const NewsMainAsideItem = styled.li`
  padding: 1.5rem 0;
  border-bottom: 0.1rem solid var(--dark-grayish-blue);

  &:nth-last-child(1) {
    border-bottom: none;
    padding: 1.5rem 0 1rem 0;
  }
`;
const NewsMainAsideItemTitle = styled.h3`
  font-size: 1rem;
  line-height: 2rem;
`;
const NewsMainAsideItemDesc = styled.p`
  color: var(--grayish-blue);
  opacity: 0.8;
  font-size: 0.8rem;
  line-height: 1.5rem;
`;

const NewsMain = () => {
  const news: News[] = [
    {
      title: "Hydrogen VS Electric Cars",
      desc: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      desc: "What are the possible adverse effects of on-demand All image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <>
      <NewsMainContainer>
        <NewsMainArticle>
          <figure>
            <NewsMainArticleHeroImg src="images/image-web-3-desktop.jpg" />
          </figure>
          <NewsMainArticleHero>
            <NewsMainArticleHeroTitle>
              The Bright Future of Web 3.0?
            </NewsMainArticleHeroTitle>
            <NewsMainArticleHeroDescSection>
              <NewsMainArticleHeroDesc>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </NewsMainArticleHeroDesc>
              <NewsMainArticleHeroReadMore>
                Read More
              </NewsMainArticleHeroReadMore>
            </NewsMainArticleHeroDescSection>
          </NewsMainArticleHero>
        </NewsMainArticle>
        <NewsMainAside>
          <NewsMainAsideTitle>New</NewsMainAsideTitle>
          <NewsMainAsideContent>
            {news.map(({ title, desc }) => (
              <NewsMainAsideItem>
                <NewsMainAsideItemTitle>{title}</NewsMainAsideItemTitle>
                <NewsMainAsideItemDesc>{desc}</NewsMainAsideItemDesc>
              </NewsMainAsideItem>
            ))}
          </NewsMainAsideContent>
        </NewsMainAside>
      </NewsMainContainer>
    </>
  );
};

export default NewsMain;
