import React, { FC } from "react";
import styled from "styled-components/macro";
import linkedin from "./../assets/icons/linkedin.svg";
import email from "./../assets/icons/email.svg";
import instagram from "./../assets/icons/instagram.svg";
import vimeo from "./../assets/icons/vimeo.svg";
import { ORANGE_MEDIUM_2, contentWidthStyle } from "../sharedStyles";
import { EmailLink } from "./EmailLink";
import { INSTAGRAM, LINKEDIN, VIMEO } from "../utils";

export enum FooterVariantEnum {
  Orange = "Orange",
  Blue = "Blue",
}

const FooterWrapper = styled.div<{ $variant: FooterVariantEnum }>`
  display: flex;
  height: 80px;
  min-height: 80px;
  width: 100%;
  margin-top: auto;
  background: ${({ $variant }) =>
    $variant === FooterVariantEnum.Orange ? ORANGE_MEDIUM_2 : "blue"};
`;

const FooterContent = styled.div`
  display: flex;
  ${contentWidthStyle};
  margin: auto;
  justify-content: end;
`;

const Links = styled.div`
  display: flex;
  column-gap: 20px;
  flex-wrap: wrap;
  align-items: flex-end;
  margin-left: auto;
  img {
    max-width: 25px;
  }
`;

const Link = styled.a``;

interface FooterProps {
  variant?: FooterVariantEnum;
}

export const Footer: FC<FooterProps> = ({
  variant = FooterVariantEnum.Orange,
}) => {
  return (
    <FooterWrapper $variant={variant}>
      <FooterContent>
        <Links>
          <Link href={INSTAGRAM} target="_blank">
            <img src={instagram} />
          </Link>
          <Link href={VIMEO} target="_blank">
            <img src={vimeo} />
          </Link>
          <EmailLink>
            <img src={email} />
          </EmailLink>
          <Link href={LINKEDIN} target="_blank">
            <img src={linkedin} />
          </Link>
        </Links>
      </FooterContent>
    </FooterWrapper>
  );
};
