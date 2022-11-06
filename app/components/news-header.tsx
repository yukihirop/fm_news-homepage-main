import styled from "@emotion/styled";
import NewsMenu from "components/news-menu";

const NewsHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NewsLogo = styled.h1`
  width: 70px;
  height: 50px;
  background-image: url("./images/logo.svg");
  background-repeat: no-repeat;
`;

const NewsHeader = () => {
  return (
    <NewsHeaderContainer>
      <NewsLogo />
      <NewsMenu />
    </NewsHeaderContainer>
  );
};

export default NewsHeader;
