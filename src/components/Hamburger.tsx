import styled from "styled-components/macro";
import close from "./../assets/icons/close.svg";
import hamburger from "./../assets/icons/hamburger.svg";
import { MOBILE_CUTOFF } from "../sharedStyles";
import React, { FC } from "react";

const StyledHamburger = styled.button`
  z-index: 1000;
  margin-left: auto;
  background: #fff1eb;
  align-self: center;
  height: 33px;
  width: 33px;
  display: flex;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  justify-content: center;
  @media (min-width: ${MOBILE_CUTOFF}) {
    display: none;
  }
  & > img {
    height: 100%;
  }
`;

interface HamburgerProps {
  showCloseIcon: boolean;
  onClick: () => void;
}

const Hamburger: FC<HamburgerProps> = ({ showCloseIcon, onClick }) => {
  return (
    <StyledHamburger onClick={onClick}>
      {showCloseIcon ? <img src={close}></img> : <img src={hamburger}></img>}
    </StyledHamburger>
  );
};

export default Hamburger;
