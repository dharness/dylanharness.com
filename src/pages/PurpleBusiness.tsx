import React from "react";
import { VimeoVideo } from "../components/VimeoVideo";
import { PageContentWrapper } from "../components/PageContentWrapper";
import { getProjectData, kebabToTitle } from "../utils";
import { VideoTitle } from "../components/VideoTitle";
import concept1 from "../assets/projects/purple-business/concept-01.png?as=webp";
import concept2 from "../assets/projects/purple-business/concept-02.png?as=webp";
import concept3 from "../assets/projects/purple-business/concept-03.png?as=webp";
import concept4 from "../assets/projects/purple-business/concept-04.png?as=webp";
import concept5 from "../assets/projects/purple-business/concept-05.png?as=webp";
import concept6 from "../assets/projects/purple-business/concept-06.png?as=webp";
import styled from "styled-components";

const MediaSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 40px;
  gap: 2%;
  & > img {
    max-width: 100%;
    margin: auto;
  }
`;

export function PurpleBusiness() {
  const { vimeoId, name, aspectRatio } = getProjectData("purple-business");
  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId} aspectRatio={aspectRatio}></VimeoVideo>
        <VideoTitle>{kebabToTitle(name)}</VideoTitle>
        <p>
          A small project in After Effects focused on delivering an animation on
          a short time frame, and with a minimal shape-centric design. Below are
          some explorations for different compositions and color schemes:
        </p>
        <MediaSection>
          <img src={concept1} alt="" />
          <img src={concept2} alt="" />
          <img src={concept3} alt="" />
          <img src={concept4} alt="" />
          <img src={concept5} alt="" />
          <img src={concept6} alt="" />
        </MediaSection>
      </PageContentWrapper>
    </>
  );
}
