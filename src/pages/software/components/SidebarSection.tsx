import React, { FC } from "react";
import styled from "styled-components/macro";
import { fontColors } from "../../../sharedStyles";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: ${fontColors.software.primary900};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 1.988px;
  text-transform: uppercase;
`;

interface SidebarSectionProps {
  children: React.ReactNode;
  title?: string;
}

const SidebarSection: FC<SidebarSectionProps> = ({ title, children }) => {
  return (
    <Layout>
      <Title>{title && title}</Title>
      {children}
    </Layout>
  );
};

export default SidebarSection;
