import React from "react"
import styled from "styled-components/macro";
import { projectData } from '../projects'
import { ProjectThumbnail } from '../components/ProjectThumbail'

const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: red;
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
`;

const ProjectsContent = styled.div`
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
    gap: 22px;
    justify-items: start;
`

export function Projects() {
    return (
        <ProjectsWrapper>
            <ProjectsContent>
                <ProjectsGrid>
                    {projectData.map(({ name, hoverColor }, i) => {
                        return <ProjectThumbnail row={i} col={i % 3} name={name} hoverColor={hoverColor} key={name} />
                    })}
                </ProjectsGrid>
            </ProjectsContent>
        </ProjectsWrapper>
    );
}