import React, {  useLayoutEffect, useState } from "react";
import styled from "styled-components/macro";
import { contentWidthStyle, MOBILE_CUTOFF, ORANGE_DARK } from "../sharedStyles";
import logo from "./../assets/logo.gif";
import hamburger from "./../assets/icons/hamburger.svg";
import close from "./../assets/icons/close.svg";
import { NavOVerlay } from "./NavOverlay";
import PageLink, { HeaderPaths } from "./Link";

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
  gap: 36px;
  align-items: center;
  @media (max-width: ${MOBILE_CUTOFF}) {
    display: ${(p) => (p.$lg ? "" : "none")};
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
  background: #FFF1EB;
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

  useLayoutEffect(() => {
    const handleResize: any = () => {
      setshowOverlay(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { lg } = props;
  return (
    <HeaderWrapper $lg={lg}>
      <ColorBar />
      {!lg && showOverlay && <NavOVerlay />}
      <HeaderContent $lg={lg}>
        <Logo src={logo} $lg={lg} alt="" />
        {lg && <Name $lg={lg} href="/">
          <div>Dylan</div>
          <div>Harness</div>
        </Name>}
        <PageLinks $lg={lg}>
          <PageLink name="Projects" to={HeaderPaths.projects} />
          <PageLink name="Reel" to={HeaderPaths.reel} />
          <PageLink name="About" to={HeaderPaths.about} />
        </PageLinks>
        {!lg && (
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
