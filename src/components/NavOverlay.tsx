import styled from "styled-components/macro";
import { MOBILE_CUTOFF } from "../sharedStyles";
import PageLink, { HeaderPaths } from "./Link";
import React from "react";
import logo from "./../assets/logo.gif";

const NavOverlayDiv = styled.div`
  opacity: 1;
  overflow: clip;
  background-color: white;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 999;
  @media (min-width: ${MOBILE_CUTOFF}) {
    display: none;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
`;


const Logo = styled.img`
  height:70px;
  margin-bottom: 40px;
  margin-top: auto;
`;

const StyledFooter = styled.div`
  height: 14px;
  background: #FFF1EB;
  width: 100%;
  margin-top: auto;

`;


export function NavOVerlay(props: any) {

  return <NavOverlayDiv>
    <StyledWrapper>
      <Logo src={logo} alt="" />
      <PageLink name="Projects" to={HeaderPaths.projects} />
      <PageLink name="Reel" to={HeaderPaths.reel} />
      <PageLink name="About" to={HeaderPaths.about} />
      <StyledFooter/>
    </StyledWrapper>
  </NavOverlayDiv>
}