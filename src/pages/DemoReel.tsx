import React from "react";
import { Video } from "../components/Video";
import { PageContentWrapper } from "../components/PageContentWrapper";
import { getProjectData } from "../utils";
import styled from "styled-components";

const VideoTitle = styled.div`
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  margin: auto;
  margin-top: 40px;

  color: black;
`;

export function DemoReel() {
  const { vimeoId } = getProjectData("demo-reel");
  return (
    <>
      <PageContentWrapper>
        <Video vimeoId={vimeoId}></Video>
        <VideoTitle>Motion Reel 2023</VideoTitle>
      </PageContentWrapper>
    </>
  );
}
