import React from "react"
import styled from "styled-components/macro";
import { redirect, useNavigate } from "react-router-dom";
import { Header } from '../components/Header';
import thumbnails from "../assets/projects/*/thumbnail.png";
import { projectData } from '../projects'
import { kebabToTitle } from "../utils";

const LandingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: red;
`;

const LandingContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    background: plum;
    max-width: 1085px;
    width: 80vw;
`;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 22px;
    justify-items: start;
`

const ProjectThumbnail1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;
const ProjectThumbnailWrapper = styled.div`
    background: blue;
    position: relative;
`

const ProjectThumbnailImg = styled.img`
    justify-self: start;
    &:nth-of-type(2n) { justify-self: end; }
    max-width: 100%;
    background: tan;
`

const ProjectThumbnailOverlay = styled.div<{$hoverColor: string}>`
    position: absolute;
    background: ${props => props.$hoverColor};
    width: 100%;
    height: 100%;
    opacity: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    color: white;
    &:hover {
        opacity: 70%;
        cursor: pointer;
    }
`

function ProjectThumbnail(props : any) {
    const { hoverColor, name } = props;
    const thumbnail = thumbnails[name];
    const navigate = useNavigate();
    const onThumbnailClicked = () => {
       navigate("demo-reel");
    };
    return (
            <ProjectThumbnail1>
                <ProjectThumbnailWrapper onClick={onThumbnailClicked}>
                    <ProjectThumbnailOverlay $hoverColor={hoverColor}>
                        {kebabToTitle(name)}
                    </ProjectThumbnailOverlay>
                    <ProjectThumbnailImg src={thumbnail}/>
                </ProjectThumbnailWrapper>
            </ProjectThumbnail1>
    )
}

export function Landing() {
    return (
        <LandingWrapper>
            <Header />
            <LandingContent>
                <ProjectsGrid>
                    {projectData.map(({ name, hoverColor }, i) => {
                        return <ProjectThumbnail row={i} col={i%3} name={name} hoverColor={hoverColor} key={name} />
                    })}
                </ProjectsGrid>
            </LandingContent>
        </LandingWrapper>
    );
}