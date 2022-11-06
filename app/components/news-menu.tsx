import React, { useState } from "react";
import styled from "@emotion/styled";
import { md } from "styles/media-query";

/**
 * @see https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
 */

const NewsMenuItem = styled.li`
  color: var(--dark-grayish-blue);
  &:hover {
    color: var(--soft-orange);
  }
`;

const NewsDesktopMenuContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;

  ${NewsMenuItem} {
    margin-left: 3rem;
  }

  ${md} {
    display: none;
  }
`;

const NewsDesktopMenu = () => (
  <NewsDesktopMenuContainer>
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
      <a href="">Trending</a>
    </NewsMenuItem>
    <NewsMenuItem>
      <a href="">Categories</a>
    </NewsMenuItem>
  </NewsDesktopMenuContainer>
);

const NewsMobileMenuContainer = styled.ul`
  margin-top: 10rem;
  margin-left: 2rem;
  list-style: none;
  height: 100%;

  ${NewsMenuItem} {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

const NewsMobileMenu = () => (
  <NewsMobileMenuContainer>
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
      <a href="">Trending</a>
    </NewsMenuItem>
    <NewsMenuItem>
      <a href="">Categories</a>
    </NewsMenuItem>
  </NewsMobileMenuContainer>
);

type NewsMobileMenuProps = {
  bg: string;
};

const NewsMobileBurgerMenu = styled.button`
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
    display: block;
    background-color: var(--dark-grayish-blue);
    opacity: 0.7;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`;

type NewsMobileSlideProps = {
  open: boolean;
};

const NewsMobileSlide = styled.div`
  display: none;

  ${md} {
    display: block;
    width: ${({ open }: NewsMobileSlideProps) => (open ? "70%" : "0px")};
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    transform: all 0.3s ease-in-out;
    background-color: whitesmoke;
    z-index: 1000;
    opacity: 1;
    transform: ${(props: NewsMobileSlideProps) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    transition: 0.3s;
  }
`;

const NewsMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NewsDesktopMenu />
      <NewsMobileBurgerMenu
        onClick={() => {
          if (open) {
            document.body.style.overflow = "auto";
          } else {
            document.body.style.overflow = "hidden";
          }
          setOpen(!open);
        }}
        bg={open ? "./images/icon-menu-close.svg" : "./images/icon-menu.svg"}
      />
      <>
        {open && <NewsMobileOverlay />}
        <NewsMobileSlide open={open}>
          {open && <NewsMobileMenu />}
        </NewsMobileSlide>
      </>
    </>
  );
};

export default NewsMenu;
