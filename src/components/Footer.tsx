import React from "react";
import styled from "styled-components";
import linkedin from "./../assets/icons/linkedin.svg";
import email from "./../assets/icons/email.svg";
import instagram from "./../assets/icons/instagram.svg";
import vimeo from "./../assets/icons/vimeo.svg";
import { contentWidth } from "../sharedStyles";

const FooterWrapper = styled.div`
  display: flex;
  height: 80px;
  min-height: 80px;
  background: blueviolet;
  width: 100%;
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: flex;
  background: green;
  ${contentWidth};
  margin: auto;
  justify-content: end;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
  background: orange;
  & > img {
    max-width: 30px;
  }
`;

const Link = styled.a``;

export function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <Links>
          <Link href="https://www.instagram.com/dylanharness/" target="_blank">
            <img src={instagram} />
          </Link>
          <Link href="https://vimeo.com/user126295858" target="_blank">
            <img src={vimeo} />
          </Link>
          <Link href="mailto:dharness.engineer@gmail.com" target="_blank">
            <img src={email} />
          </Link>
          <Link href="https://www.linkedin.com/in/dhsoftware/" target="_blank">
            <img src={linkedin} />
          </Link>
        </Links>
      </FooterContent>
    </FooterWrapper>
  );
}