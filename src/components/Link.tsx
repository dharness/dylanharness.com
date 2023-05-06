import React from "react";
import styled from "styled-components";
import { ORANGE_DARK } from "../sharedStyles";
import { Link, useLocation } from "react-router-dom";

export const enum HeaderPaths {
  root = "/",
  projects = "/projects",
  about = "/about",
  reel = "/reel",
}
const StyledLink = styled(Link)<{ $isSelected: boolean }>`
  margin-left: 40px;
  margin-bottom: 20px;
  align-self: end;
  font-family: futura-pt, sans-serif;
  font-weight: 500;
  font-size: 20px;
  font-style: normal;
  color: black;
  text-decoration: none;
  color: ${(p) => (p.$isSelected ? ORANGE_DARK : "")};
  &:hover {
    color: ${ORANGE_DARK};
  }
`;

function PageLink(props: any) {
  const { to, name } = props;
  const currentPath = useLocation().pathname;
  const currentLink =
    currentPath === HeaderPaths.root ? HeaderPaths.projects : currentPath;

  return (
    <StyledLink $isSelected={to === currentLink} to={to}>
      {name}
    </StyledLink>
  );
}

export default PageLink;
