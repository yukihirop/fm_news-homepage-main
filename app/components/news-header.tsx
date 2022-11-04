import styled from '@emotion/styled'
import { sm } from 'styles/media-query'

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

const NewsMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;

  ${sm} {
    display: none;
  }
`;

const NewsMenuMobile = styled.button`
  width: 60px;
  height: 60px;
  display: none;

  ${sm} {
    display: block;
    background-image: url("./images/icon-menu.svg");
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;

    &:hover {
      cursor: pointer;
    }
  }
`;

const NewsMenuItem = styled.li`
  margin-left: 3rem;
  color: var(--dark-grayish-blue);

  &:hover {
    color: var(--soft-orange);
  }
`;

const NewsHeader = () => (
  <NewsHeaderContainer>
    <NewsLogo />
    <NewsMenu>
      <NewsMenuItem>
        <a href="">Home</a>
      </NewsMenuItem>
      <NewsMenuItem>
        <a href="">New</a>
      </NewsMenuItem>
      <NewsMenuItem>
        <a href="">Popular</a>
      </NewsMenuItem>
      <NewsMenuItem>
        <a href="">Categories</a>
      </NewsMenuItem>
    </NewsMenu>
    <NewsMenuMobile />
  </NewsHeaderContainer>
);

export default NewsHeader
