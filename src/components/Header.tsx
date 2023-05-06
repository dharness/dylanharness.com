import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components/macro";
import { contentWidthStyle, MOBILE_CUTOFF, ORANGE_DARK } from "../sharedStyles";
import logo from "./../assets/logo.gif";
import hamburger from "./../assets/icons/hamburger.svg";
import close from "./../assets/icons/close.svg";
import { NavOVerlay } from "./NavOverlay";
import { Link } from "react-router-dom";
import PageLink, { HeaderPaths } from "./Link";

const HeaderWrapper = styled.div<{ $isLandingPage: boolean }>`
  height: ${(props) => (props.$isLandingPage ? 200 : 100)}px;
  max-height: ${(props) => (props.$isLandingPage ? 200 : 100)}px;
  min-height: ${(props) => (props.$isLandingPage ? 200 : 100)}px;
  background: green;
`;

const HeaderContent = styled.div<{ $isLandingPage: boolean }>`
  ${contentWidthStyle};
  margin: 0px auto 0px auto;
  display: flex;
  flex-direction: ${(p) => (p.$isLandingPage ? "column" : "row")};
`;

const Name = styled.a<{ $isLandingPage: boolean }>`
  font-size: 32px;
  align-self: end;
  font-family: "Rubik Mono One", sans-serif;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  color: ${ORANGE_DARK};
  display: flex;
  flex-direction: ${(p) => (p.$isLandingPage ? "row" : "column")};
  align-self: ${(p) => (p.$isLandingPage ? "center" : "end")};
  > * {
    &:first-child {
      font-size: ${(p) => (p.$isLandingPage ? 35 : 32)}px;
      margin-bottom: -6px;
      ${({ $isLandingPage }) =>
        $isLandingPage &&
        `&::after {
          content: ".";
        }`}
    }
  }
  &:nth-child(2) {
    font-size: ${(p) => (p.$isLandingPage ? 35 : 23)}px;
  }
`;

const PageLinks = styled.div<{ $isLandingPage: boolean }>`
  display: flex;
  margin-left: auto;
  background: white;
  margin: ${(p) => (p.$isLandingPage ? "auto" : "")};
  gap: 36px;
  align-items: center;
  @media (max-width: ${MOBILE_CUTOFF}) {
    display: ${(p) => (p.$isLandingPage ? "" : "none")};
  }
  a {
    margin: ${(p) => (p.$isLandingPage ? "10px 20px 0px 20px" : "")};
  }
`;

const Logo = styled(Link)<{ $isLandingPage: boolean }>`
  height: ${(p) => (p.$isLandingPage ? "95px" : "70px")};
  margin-left: -30px;
  margin: ${(p) => (p.$isLandingPage ? "auto" : "")};
  img {
    height: 100%;
  }
`;

const Hamburger = styled.button`
  z-index: 1000;
  margin-left: auto;
  background: #fff1eb;
  align-self: center;
  height: 33px;
  width: 33px;
  display: flex;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  @media (min-width: ${MOBILE_CUTOFF}) {
    display: none;
  }
  & > img {
    height: 100%;
    margin: auto;
    margin-left: -5px;
  }
`;

const ColorBar = styled.div`
  height: 30px;
  background: plum;
`;

export function Header(props: any) {
  const [showOverlay, setshowOverlay] = useState(false);
  const mediaQuery = `(min-width: ${MOBILE_CUTOFF})`

  const [isMediaQueryMatched, setisMediaQueryMatched] = useState(
    window.matchMedia(mediaQuery).matches
  )

  useLayoutEffect(() => {
    window
    .matchMedia(mediaQuery)
    .addEventListener('change', e => setisMediaQueryMatched( e.matches ));
  }, []);

  useLayoutEffect(() => {
    const handleResize: any = () => {
      setshowOverlay(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { lg: isLandingPage } = props;
  return (
    <HeaderWrapper $isLandingPage={isLandingPage}>
      <ColorBar />
      {!isLandingPage && showOverlay && <NavOVerlay />}
      <HeaderContent $isLandingPage={isLandingPage}>
        <Logo $isLandingPage={isLandingPage} to={HeaderPaths.root}>
          <img src={logo} alt="" />
        </Logo>
        {
          isMediaQueryMatched && <Name $isLandingPage={isLandingPage} href="/">
            <div>Dylan</div>
            <div>Harness</div>
          </Name>
        }
        <PageLinks $isLandingPage={isLandingPage}>
          <PageLink name="Projects" to={HeaderPaths.projects} />
          <PageLink name="Reel" to={HeaderPaths.reel} />
          <PageLink name="About" to={HeaderPaths.about} />
        </PageLinks>
        {!isLandingPage && (
          <Hamburger onClick={(_) => setshowOverlay(!showOverlay)}>
            {showOverlay ? (
              <img src={close}></img>
            ) : (
              <img src={hamburger}></img>
            )}
          </Hamburger>
        )}
      </HeaderContent>
    </HeaderWrapper>
  );
}
