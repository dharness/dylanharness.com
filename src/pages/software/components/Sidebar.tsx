import React, { FC } from "react";
import styled from "styled-components/macro";
import { MOBILE_CUTOFF } from "../../../sharedStyles";
import Hamburger from "../../../components/Hamburger";

const LargeScreenLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: red;
  width: 154px;
  padding: 0px 20px 0px 20px;
  @media (max-width: ${MOBILE_CUTOFF}) {
    display: none;
  }
`;

const SmallScreenLayout = styled.div`
  display: none;
  background: blue;
  flex-direction: column;
  @media (max-width: ${MOBILE_CUTOFF}) {
    display: flex;
  }
`;

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <>
      <Hamburger
        showCloseIcon={false}
        onClick={() => {
          console.log("ok");
        }}
      ></Hamburger>
      <SmallScreenLayout>{children}</SmallScreenLayout>
      <LargeScreenLayout>{children}</LargeScreenLayout>
    </>
  );
};

export default Sidebar;
