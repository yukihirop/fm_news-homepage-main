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
    z-index: 9999;

    &:hover {
      cursor: pointer;
    }
  }
`;

const NewsMobileOverlay = styled.div`
  display: none;

  ${md} {
    background-color: var(--dark-grayish-blue);
    opacity: 0.7;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`;

type NewsMobileSlideProps = {
  close: boolean;
};

const NewsMobileSlide = styled.div`
  display: none;

  ${md} {
    display: block;
    width: 70%;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    transform: all 0.3s ease-in-out;
    background-color: whitesmoke;
    z-index: 1000;
    opacity: 1;
    transform: ${(props: NewsMobileSlideProps) =>
      props.close ? "translateX(0)" : "translateX(100%)"};
    transition: 0.3s;
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
      <>
        <NewsMobileOverlay />
        <NewsMobileSlide close={close} />
      </>
    </>
  );
};

export default NewsMenu;
