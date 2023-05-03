import React from "react"
import styled from "styled-components";
import { Header } from '../components/Header';

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function ProjectPreview() {
    return (
        <div>
            <image src="./assets/"/>
        </div>
    )
}

export function Landing() {
    return (
        <LandingWrapper>
            <Header/>
            Hello
        </LandingWrapper>
    );
}