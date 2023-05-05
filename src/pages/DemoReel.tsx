import React from "react";
import { VimeoVideo } from "../components/VimeoVideo";
import { PageContentWrapper } from "../components/PageContentWrapper";
import { getProjectData } from "../utils";
import { VideoTitle } from "../components/VideoTitle";

export function DemoReel() {
  const { vimeoId, aspectRatio } = getProjectData("demo-reel");
  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId} aspectRatio={aspectRatio}></VimeoVideo>
        <VideoTitle>Motion Reel 2023</VideoTitle>
      </PageContentWrapper>
    </>
  );
}
