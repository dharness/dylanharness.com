import React from "react"
import styled from "styled-components";
import { Header } from '../components/Header';

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export function Landing() {
    return (
        <LandingWrapper>
            <Header/>
            Hello
        </LandingWrapper>
    );
}