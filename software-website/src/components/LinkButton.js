import React from "react";
import styled from "styled-components";
import githubIcon from "./../../static/images/github-icon.svg";
import externalLinkIcon from "./../../static/images/external-link-icon.svg";

const StyledLinkButton = styled.a`
  font-size: 13.3333px;
  font-family: Arial;
  font-weight: 500;
  color: black;

  border-radius: 5px;
  border: 1px solid #dfdfe3;
  background: #fff;
  cursor: pointer;
  height: 29px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 9px 10px 9px 10px;
  user-select: none;
  &:hover {
    text-decoration: none;
    background: #f6f6f6;
  }
  img {
    width: 20px;
  }
`;

const getBaseURL = (urlString) => {
  try {
    const url = new URL(urlString);
    const hostParts = url.hostname.split(".");
    return hostParts?.slice(-2)[0];
  } catch (error) {
    console.error("Invalid URL:", error.message);
    return "";
  }
};

const getButtonContent = (urlString) => {
  const baseUrl = getBaseURL(urlString);
  switch (baseUrl) {
    case "github":
      return [githubIcon, "Github"];
    case "apple":
      return [githubIcon, "App Store"];
    default:
      return [externalLinkIcon, "Website"];
  }
};

const LinkButton = ({ link }) => {
  const [icon, label] = getButtonContent(link);
  return (
    <StyledLinkButton href={link} target="_blank">
      <img src={icon} />
      {label}
    </StyledLinkButton>
  );
};

export default LinkButton;
