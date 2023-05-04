import React from "react";
import { VimeoVideo } from "../components/VimeoVideo";
import { PageContentWrapper } from "../components/PageContentWrapper";
import { getProjectData } from "../utils";
import { VideoTitle } from "../components/VideoTitle";

export function DemoReel() {
  const { vimeoId } = getProjectData("demo-reel");
  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId}></VimeoVideo>
        <VideoTitle>Motion Reel 2023</VideoTitle>
      </PageContentWrapper>
    </>
  );
}
