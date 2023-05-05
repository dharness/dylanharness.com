import React from "react";
import styled from "styled-components/macro";
import { VimeoVideo } from "../components/VimeoVideo";
import { Video } from "../components/Video";
import { FigureText } from "../components/FigureText";
import { PageContentWrapper } from "../components/PageContentWrapper";
import { getProjectData, kebabToTitle } from "../utils";
import { VideoTitle } from "../components/VideoTitle";
import turnaround from "./../assets/projects/fee-ranger/turnaround_4x.png";
import objectsLeft from "./../assets/projects/fee-ranger/objects_left.png";
import objectsRight from "./../assets/projects/fee-ranger/objects_right.png";
import digWide from "./../assets/projects/fee-ranger/dig-wide.mp4";
import characterSpread from "./../assets/projects/fee-ranger/characte-concept-spread.png";

const MediaSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const TurnaroundWrapper = styled.div`
  & > img {
    width: 120%;
    margin-left: -10%;
  }
`;
const ObjectsRow = styled.div`
  display: flex;
  & > img {
    width: 59.5%;
    margin-left: -6.3%;
  }
`;
const CharacterSpreadWrapper = styled.div`
  & > img {
    width: 110%;
    margin-left: -5%;
  }
`;

export function FeeRanger() {
  const { vimeoId, name, aspectRatio } = getProjectData("fee-ranger");
  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId} aspectRatio={aspectRatio}></VimeoVideo>
        <VideoTitle>{kebabToTitle(name)}</VideoTitle>
        <p>
          This project takes a character all the way from concept, through
          sculpting, retopo, rigging, and animating. The character was made in
          ZBrush and rigged and animated in C4D, and finally, rendered with
          Redshift.
        </p>
        <MediaSection>
          <TurnaroundWrapper>
            <img src={turnaround} />
          </TurnaroundWrapper>
          <FigureText>Fig 1. Ranger turnaround</FigureText>

          <ObjectsRow>
            <img src={objectsLeft} alt="" />
            <img src={objectsRight} alt="" />
          </ObjectsRow>
          <FigureText>Fig 2. Ranger accessories</FigureText>

          <Video src={digWide}></Video>
          <FigureText>Fig 3. Scrapped dig animation</FigureText>

          <CharacterSpreadWrapper>
            <img src={characterSpread} alt="" />
          </CharacterSpreadWrapper>
          <FigureText>Fig 4. Rough sketch and color study</FigureText>
        </MediaSection>
      </PageContentWrapper>
    </>
  );
}
