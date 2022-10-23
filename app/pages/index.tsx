import type { NextPage } from "next";
import styled from "@emotion/styled";
import { sm } from "styles/media-query";

const NewsContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: solid 1px black;
`;

const NewsHeader = styled.header`
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

  &:hover {
    color: var(--soft-orange);
  }
`;

const Home: NextPage = () => {
  return (
    <NewsContainer>
      <NewsHeader>
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
        <NewsMenuMobile/>
      </NewsHeader>
    </NewsContainer>
  );
};

export default Home;
