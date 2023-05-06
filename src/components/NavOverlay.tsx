import styled from "styled-components/macro";
import { MOBILE_CUTOFF } from "../sharedStyles";

export const NavOVerlay = styled.div`
  opacity: 1;
  background-color: #ccc;
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
