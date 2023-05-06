import React from "react";
import styled from "styled-components/macro";
import { VimeoVideo } from "../components/VimeoVideo";
import { PageContentWrapper } from "../components/PageContentWrapper";
import { getProjectData, kebabToTitle } from "../utils";
import { VideoTitle } from "../components/VideoTitle";
import { Video } from "../components/Video";
import ruffs from "./../assets/projects/bronco-henry/cowboy-ruffs.mp4";
import cowboyLeft from "./../assets/projects/bronco-henry/cowboy_L_alpha.png?as=webp";
import cowboyRight from "./../assets/projects/bronco-henry/cowboy_R_alpha.png?as=webp";
import { FigureText } from "../components/FigureText";

const MediaSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Images = styled.div`
  display: flex;
  justify-content: space-between;
  /* max-height: 385px; */

  & > img {
    max-width: 48%;
  }
`;

const StyledVideoDiv = styled.div`
  max-height: 330px;
  display: flex;
`;

export function BroncoHenry() {
  const { vimeoId, name, aspectRatio } = getProjectData("bronco-henry");
  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId} aspectRatio={aspectRatio}></VimeoVideo>
        <VideoTitle>{kebabToTitle(name)}</VideoTitle>
        <p>
          This cowboy was animated frame by frame in Toon Boom and cleaned up in
          After Effects. I tried to push his noodley appendages to the extreme,
          making him somewhat of a glyph.
        </p>
        <MediaSection>
          <StyledVideoDiv>
            <Video src={ruffs}></Video>
          </StyledVideoDiv>
          <FigureText>Fig 1. Rough Animation in Toonboom</FigureText>
          <Images>
            <img src={cowboyLeft} alt="" />
            <img src={cowboyRight} alt="" />
          </Images>
        </MediaSection>
      </PageContentWrapper>
    </>
  );
}
