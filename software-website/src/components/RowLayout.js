import React from "react";
import styled from "styled-components";

const StyledRowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const RowLayout = ({ children }) => {
  return <StyledRowDiv>{children}</StyledRowDiv>;
};

export default RowLayout;
