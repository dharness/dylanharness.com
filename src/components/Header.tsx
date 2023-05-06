import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { contentWidthStyle, ORANGE_DARK } from "../sharedStyles";
import logo from "./../assets/logo.gif";
import hamburger from "./../assets/icons/hamburger.svg";

const HeaderWrapper = styled.div<{ $lg: boolean }>`
  height: ${(props) => (props.$lg ? 200 : 100)}px;
  max-height: ${(props) => (props.$lg ? 200 : 100)}px;
  min-height: ${(props) => (props.$lg ? 200 : 100)}px;
  background: green;
`;

const HeaderContent = styled.div<{ $lg: boolean }>`
  ${contentWidthStyle};
  margin: 0px auto 0px auto;
  display: flex;
  flex-direction: ${(p) => (p.$lg ? "column" : "row")};
`;

const Name = styled.a<{ $lg: boolean }>`
  font-size: 32px;
  align-self: end;
  font-family: "Rubik Mono One", sans-serif;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  color: ${ORANGE_DARK};
  display: flex;
  flex-direction: ${(p) => (p.$lg ? "row" : "column")};
  align-self: ${(p) => (p.$lg ? "center" : "end")};
  > * {
    &:first-child {
      font-size: ${(p) => (p.$lg ? 35 : 32)}px;
      margin-bottom: -6px;
      ${({ $lg }) =>
        $lg &&
        `&::after {
          content: ".";
        }`}
    }
  }
  &:nth-child(2) {
    font-size: ${(p) => (p.$lg ? 35 : 23)}px;
  }
`;

const PageLinks = styled.div<{ $lg: boolean }>`
  display: flex;
  margin-left: auto;
  background: white;
  margin: ${(p) => (p.$lg ? "auto" : "")};
  @media (max-width: 660px) {
    display: none;
  }
`;

const PageLink = styled.a<{ $lg: boolean }>`
  margin-left: 40px;
  margin-bottom: 20px;
  margin: ${(p) => (p.$lg ? "10px 30px 0px 30px" : "")};
  align-self: end;
  font-family: futura-pt, sans-serif;
  font-weight: 500;
  font-size: 20px;
  font-style: normal;
  color: black;
  text-decoration: none;
  &:first-of-type {
    color: ${ORANGE_DARK};
  }
  &:hover {
    color: ${ORANGE_DARK};
  }
`;

const Logo = styled.img<{ $lg: boolean }>`
  height: ${(p) => (p.$lg ? "95px" : "70px")};
  margin-left: -30px;
  margin: ${(p) => (p.$lg ? "auto" : "")};
`;

const Hamburger = styled.button`
  z-index: 1000;
  margin-left: auto;
  background: red;
  align-self: center;
  height: 50px;
  width: 50px;
  display: flex;
  cursor: pointer;
  border: none;
  @media (min-width: 660px) {
    display: none;
  }
  & > img {
    height: 100%;
    margin: auto;
    margin-left: -4px;
  }
`;

const MobileNav = styled.div`
  opacity: 1;
  background-color: #ccc;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 999;
  @media (min-width: 660px) {
    display: none;
  }
`;

const ColorBar = styled.div`
  height: 30px;
  background: plum;
`;

export function Header(props: any) {
  const [showOverlay, setshowOverlay] = useState(false);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const delta = window.innerWidth - windowWidth;
      console.log(windowWidth);
      setwindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // console.log(windowWidth);
  const { lg } = props;
  return (
    <HeaderWrapper $lg={lg}>
      <ColorBar />
      {!lg && showOverlay && <MobileNav />}
      <HeaderContent $lg={lg}>
        <Logo src={logo} $lg={lg} alt="" />
        <Name $lg={lg} href="/">
          <div>Dylan</div>
          <div>Harness</div>
        </Name>
        <PageLinks $lg={lg}>
          <PageLink $lg={lg} href="/#/demo-reel">
            Reel
          </PageLink>
          <PageLink $lg={lg} href="/">
            Projects
          </PageLink>
          <PageLink $lg={lg} href="/about">
            About
          </PageLink>
        </PageLinks>
        {!lg && (
          <Hamburger onClick={(_) => setshowOverlay(!showOverlay)}>
            <img src={hamburger}></img>
          </Hamburger>
        )}
      </HeaderContent>
    </HeaderWrapper>
  );
}
