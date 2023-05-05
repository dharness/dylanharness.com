import React from "react";
import styled from "styled-components";
import { VimeoVideo } from "../components/VimeoVideo";
import { PageContentWrapper } from "../components/PageContentWrapper";
import { getProjectData, kebabToTitle } from "../utils";
import { VideoTitle } from "../components/VideoTitle";
import { FigureText } from "../components/FigureText";
import { Video } from "../components/Video";
import ruffs from "../assets/projects/portrait-of-a-lady/ruffs.webm";
import colors from "../assets/projects/portrait-of-a-lady/color-study.png?as=webp";

const MediaSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  align-items: flex-end;
`;
const MediaColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  & > img {
    margin-bottom: 7.9%;
  }
`;

export function PortraitOfALady() {
  const { vimeoId, name, aspectRatio } = getProjectData("portrait-of-a-lady");
  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId} aspectRatio={aspectRatio}></VimeoVideo>
        <VideoTitle>{kebabToTitle(name)}</VideoTitle>
        <p>
          This sequence was roughed in Toon Boom, with some cleanup done in
          After Effects. It focuses on showing the facial expression and emotion
          of a character as they react to an annoying fly.
        </p>
        <MediaSection>
          <MediaColumn>
            <Video src={ruffs}></Video>
            <FigureText>Fig 1. Rough animation</FigureText>
          </MediaColumn>
          <MediaColumn>
            <img src={colors} alt="" />
            <FigureText>Fig 2. Thumbnails and color study </FigureText>
          </MediaColumn>
        </MediaSection>
      </PageContentWrapper>
    </>
  );
}
