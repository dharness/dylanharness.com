import React from "react";
import styled from "styled-components/macro";
import { Link, useNavigate } from "react-router-dom";
import { kebabToTitle } from "../utils";
import {
  contentWidthPx,
  contentWidthVw,
  projectGridGap,
} from "../sharedStyles";

const ProjectThumbnailWrapper = styled.div<{ $bgColor: string }>`
  background: ${(p) => p.$bgColor};
  position: relative;
  &:hover {
    cursor: pointer;
  }
  width: 100%;
  min-height: min(
    calc((0.75 * ${contentWidthVw} / 2) - (${projectGridGap} / 2)),
    calc((0.75 * ${contentWidthPx} / 2) - (${projectGridGap} / 2))
  );
`;

const ProjectThumbnailImg = styled.img`
  justify-self: start;
  &:nth-of-type(2n) {
    justify-self: end;
  }
  max-width: 100%;
  background: tan;
`;

const ProjectThumbnailOverlay = styled.div<{ $hoverColor: string }>`
  position: absolute;
  z-index: 1;
  background: ${(props) => props.$hoverColor};
  width: 100%;
  height: 100%;
  opacity: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  ${ProjectThumbnailWrapper}:hover & {
    opacity: 70%;
  }
`;

const ProjectTitle = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  opacity: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: white;
  ${ProjectThumbnailWrapper}:hover & {
    opacity: 100%;
  }
`;

export function ProjectThumbnail(props: any) {
  const { hoverColor, name, thumbnail } = props;
  return (
    <Link to={"/" + name}>
      <ProjectThumbnailWrapper $bgColor={hoverColor}>
        <ProjectTitle>
          <p>{kebabToTitle(name)}</p>
        </ProjectTitle>
        <ProjectThumbnailOverlay $hoverColor={hoverColor} />
        <ProjectThumbnailImg src={thumbnail} />
      </ProjectThumbnailWrapper>
    </Link>
  );
}
