import React from "react";
import styled from "styled-components/macro";
import { contentWidth, ORANGE_DARK } from "../sharedStyles";
import logo from "./../assets/logo.gif";

const HeaderWrapper = styled.div<{ $lg: boolean }>`
  height: ${(props) => (props.$lg ? "260px" : "100px")};
  max-height: ${(props) => (props.$lg ? "260px" : "100px")};
  min-height: ${(props) => (props.$lg ? "260px" : "100px")};
  background: green;
`;

const HeaderContent = styled.div`
  ${contentWidth};
  margin: 0px auto 0px auto;
  display: flex;
`;

const Name = styled.a`
  font-size: 32px;
  align-self: end;
  font-family: "Rubik Mono One", sans-serif;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  color: ${ORANGE_DARK};
  display: flex;
  flex-direction: column;
  > * {
    &:first-child {
      font-size: 32px;
      margin-bottom: -6px;
    }
  }
  &:nth-child(2) {
    font-size: 23px;
  }
`;

const Subtext = styled.div`
  font-size: 16px;
`;

const PageLinks = styled.div`
  display: flex;
  margin-left: auto;
  background: white;
`;

const PageLink = styled.a`
  margin-left: 40px;
  margin-bottom: 20px;
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

const Logo = styled.img`
  height: 70px;
  margin-left: -30px;
`;

const ColorBar = styled.div`
  height: 30px;
  background: plum;
`;

function HeaderSmall() {
  return (
    <HeaderWrapper $lg={false}>
      <ColorBar />
      <HeaderContent>
        <Logo src={logo} alt="" />
        <Name href="/">
          <div>Dylan</div>
          <div>Harness</div>
        </Name>
        <PageLinks>
          <PageLink href="/demo-reel">Reel</PageLink>
          <PageLink href="/">Projects</PageLink>
          <PageLink href="/about">About</PageLink>
        </PageLinks>
      </HeaderContent>
    </HeaderWrapper>
  );
}

export function Header(props: any) {
  const { lg } = props;
  if (!lg) {
    return <HeaderSmall />;
  }

  return (
    <HeaderWrapper $lg={true}>
      <div>
        <Name>Dylan Harness</Name>
        <Subtext>Motion Designer</Subtext>
      </div>
      <div>links</div>
      {lg && <>I am large</>}

      <div>
        <div className="header-name">Dylan Har</div>
        <div>dmkdj</div>
      </div>
    </HeaderWrapper>
  );
}
