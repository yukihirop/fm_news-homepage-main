import React, { useState } from "react";
import styled from "@emotion/styled";
import { md } from "styles/media-query";

/**
 * @see https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
 */

const NewsDesktopMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;

  ${md} {
    display: none;
  }
`;

const NewsDesktopMenuItem = styled.li`
  margin-left: 3rem;
  color: var(--dark-grayish-blue);

  &:hover {
    color: var(--soft-orange);
  }
`;

const NewsDesktopMenu = () => (
  <NewsDesktopMenuContainer>
    <NewsDesktopMenuItem>
      <a href="">Home</a>
    </NewsDesktopMenuItem>
    <NewsDesktopMenuItem>
      <a href="">New</a>
    </NewsDesktopMenuItem>
    <NewsDesktopMenuItem>
      <a href="">Popular</a>
    </NewsDesktopMenuItem>
    <NewsDesktopMenuItem>
      <a href="">Categories</a>
    </NewsDesktopMenuItem>
  </NewsDesktopMenuContainer>
);

type NewsMobileMenuProps = {
  bg: string;
};

const NewsMobileMenu = styled.button`
  width: 60px;
  height: 60px;
  display: none;

  ${md} {
    display: block;
    background-image: url(${(props: NewsMobileMenuProps) => props.bg});
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    transform: all 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
    }
  }
`;

const NewsMenu = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      <NewsDesktopMenu />
      <NewsMobileMenu
        onClick={() => setClose(!close)}
        bg={close ? "./images/icon-menu-close.svg" : "./images/icon-menu.svg"}
      />
    </>
  );
};

export default NewsMenu;
