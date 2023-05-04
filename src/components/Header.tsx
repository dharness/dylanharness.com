import React from "react"
import styled from "styled-components";

const HeaderWrapper = styled.div`
  height: 260px;
  max-height: 260px;
  min-height: 260px;
  background: green;
`;

const NameDiv = styled.div`
  font-size: 32px;
`;

const Subtext = styled.div`
  font-size: 16px;
`;

export function Header(props: any) {
  const {lg} = props;
    return (
        <HeaderWrapper>
            <div>
                <NameDiv>Dylan Harness</NameDiv>
                <Subtext>Motion Designer</Subtext>
            </div>
            <div>
                links
            </div>
            {lg && <>I am large</>}

            <div>
                <div className="header-name">Dylan Har</div>
                <div>dmkdj</div>
            </div>

        </HeaderWrapper>
    );
}