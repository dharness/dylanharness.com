import React from "react";
import styled from "styled-components/macro";
import { projectData } from "../projectData";
import { ProjectThumbnail } from "../components/ProjectThumbail";
import { contentWidthStyle, projectGridGap } from "../sharedStyles";

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: red;
  &::before {
    content: " ";
    background: yellow;
    min-height: 55px;
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
  ${contentWidthStyle};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${projectGridGap};
  justify-items: start;
`;

export function Projects() {
  return (
    <ProjectsWrapper>
      <ProjectsContent>
        <ProjectsGrid>
          {projectData.map(({ name, hoverColor, thumbnail }) => {
            return (
              <ProjectThumbnail
                thumbnail={thumbnail}
                name={name}
                hoverColor={hoverColor}
                key={name}
              />
            );
          })}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsWrapper>
  );
}
