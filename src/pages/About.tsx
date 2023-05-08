import React from "react";
import { PageContentWrapper } from "../components/PageContentWrapper";
import styled from "styled-components";

const StyledP = styled.p`
  max-width: 700px;
  margin: auto;
  a {
    text-decoration: none;
    font-weight: bold;
    color: #32c3f0;
    :hover {
      color: #20a1c8;
    }
  }
`;

export function About() {
  return (
    <>
      <PageContentWrapper>
        <StyledP>
          Dylan Harness is a motion designer from Canada. He used to be a
          software engineer but changed his mind about it. He lives with his
          wife and a beagle named Ketchup. In his spare time he likes to cook
          and make{" "}
          <a target="_blank" href={"https://dharness.github.io/games/"}>
            games!
          </a>
        </StyledP>
      </PageContentWrapper>
    </>
  );
}
