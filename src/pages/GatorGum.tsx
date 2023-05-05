import React from "react";
import { VimeoVideo } from "../components/VimeoVideo";
import { Video } from "../components/Video";
import { FigureText } from "../components/FigureText";
import { VideoTitle } from "../components/VideoTitle";
import { getProjectData, kebabToTitle } from "../utils";
import { PageContentWrapper } from "../components/PageContentWrapper";
import packageDesign from "./../assets/projects/gator-gum/package-design.png";
import blender from "./../assets/projects/gator-gum/blender_package_wide.webm";
import styled from "styled-components";

const MediaSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  margin-top: 40px;
`;

export function GatorGum() {
  const { vimeoId, name } = getProjectData("gator-gum");
  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId}></VimeoVideo>
        <VideoTitle>{kebabToTitle(name)}</VideoTitle>
        <p>
          Gator gum is inspired by fun, bold color palettes and vintage
          packaging design. The frame by frame animation was done in Toon Boom
          Harmony, and cleaned up in After Effects. The gum package was made in
          blender and composited for a seamless loop.
        </p>
        <MediaSection>
          <img src={packageDesign} alt="" />
          <FigureText>Fig 1. Gum package illustration</FigureText>
          <Video src={blender}></Video>
          <FigureText>Fig 2. Gum package in Blender</FigureText>
        </MediaSection>
      </PageContentWrapper>
    </>
  );
}
