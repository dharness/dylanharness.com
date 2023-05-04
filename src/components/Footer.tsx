import React from "react"
import styled from "styled-components";
import linkedin from "./../assets/icons/linkedin.svg"
import email from "./../assets/icons/email.svg"
import instagram from "./../assets/icons/instagram.svg"
import vimeo from "./../assets/icons/vimeo.svg"

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
  max-width: 1085px;
  margin: auto;
  width: 80vw;
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

export function Footer() {
    return (
        <FooterWrapper>
          <FooterContent>
            <Links>
              <img src={instagram} />
              <img src={vimeo} />
              <img src={email} />
              <img src={linkedin} />
            </Links>
          </FooterContent>
        </FooterWrapper>
    );
}