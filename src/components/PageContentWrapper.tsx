import styled from "styled-components/macro";
import { contentWidth } from "../sharedStyles";

const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${contentWidth};
  max-width: 900px;
  margin: 0px auto 0px auto;
  background: aquamarine;
  &::before {
    content: " ";
    background: yellow;
    min-height: 65px;
  }
  &::after {
    content: " ";
    background: yellow;
    min-height: 100px;
  }
  & > p {
    font-family: "Prompt";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
  }
`;

export { PageContentWrapper };
