import React from "react";
import styled from "styled-components/macro";
import { Video } from "../components/Video";
import { VimeoVideo } from "../components/VimeoVideo";
import { PageContentWrapper } from "../components/PageContentWrapper";
import { getProjectData, kebabToTitle } from "../utils";
import { VideoTitle } from "../components/VideoTitle";
import endCard from "../assets/projects/fresh-caught/end-card.png?as=webp";
import featherDemo from "../assets/projects/fresh-caught/feather-demo-02.mp4";
import poses from "../assets/projects/fresh-caught/fish-poses-combined.png?as=webp";
import fishRig from "../assets/projects/fresh-caught/fish-demo.mp4";
import { FigureText } from "../components/FigureText";

const MediaSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const PosesWrapper = styled.div`
  width: 110%;
  margin-left: -5%;
  & > img {
    width: 100%;
  }
`;

const EndCardWrapper = styled.div`
  width: 90%;
  margin: auto;
  & > img {
    width: 100%;
  }
`;

const FeathersWrapper = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 10px;
  overflow: clip;
`;

export function FreshCaught() {
  const { vimeoId, name, aspectRatio } = getProjectData("fresh-caught");
  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId} aspectRatio={aspectRatio}></VimeoVideo>
        <VideoTitle>{kebabToTitle(name)}</VideoTitle>
        <p>
          This speculative ad spot was made mostly in After Effects. The
          character and leaf systems were rigged with DUIK for a smooth and easy
          to control animation.
        </p>
        <MediaSection>
          <Video src={fishRig}></Video>
          <FigureText>Fig 1. Fish controls</FigureText>
          <p>
            I like to wrap up little elements when I can into rigged pre-comps
            that can be controlled and re-used from parent comps. The feathers
            were made by rotating the feather back and forth around a null,
            offset by some radius. If we scale down our offset radius as we move
            the feather downward it looks like it's rocking in the wind.
            Duplicate, and enjoy!
          </p>
          <FeathersWrapper>
            <Video src={featherDemo}></Video>
          </FeathersWrapper>
          <FigureText>Fig 2. Feather controls</FigureText>
          <PosesWrapper>
            <img src={poses} alt="" />
          </PosesWrapper>
          <FigureText>Fig 3. Fish shapes during transformation</FigureText>
          <p>
            I was inspired by the genie in Aladdin to give the fish a rapid,
            dramatic transformation into a variety of shapes. I coupled this
            with some magical yet vaguely nautical sound design by layering in a
            cork popping, and some water bubbling.
          </p>
          <EndCardWrapper>
            <img src={endCard} alt="" />
          </EndCardWrapper>
          <FigureText>Fig 4. End card design</FigureText>
        </MediaSection>
      </PageContentWrapper>
    </>
  );
}
