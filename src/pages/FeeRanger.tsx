import React from "react";
import { VimeoVideo } from "../components/VimeoVideo";
import { PageContentWrapper } from "../components/PageContentWrapper";
import { getProjectData, kebabToTitle } from "../utils";
import { VideoTitle } from "../components/VideoTitle";

export function FeeRanger() {
  const { vimeoId, name } = getProjectData("fee-ranger");
  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId}></VimeoVideo>
        <VideoTitle>{kebabToTitle(name)}</VideoTitle>
      </PageContentWrapper>
    </>
  );
}
