import React from "react";
import { VimeoVideo } from "../components/VimeoVideo";
import { PageContentWrapper } from "../components/PageContentWrapper";
import { getProjectData, kebabToTitle } from "../utils";
import { VideoTitle } from "../components/VideoTitle";

export function FreshCaught() {
  const { vimeoId, name } = getProjectData("fresh-caught");
  return (
    <>
      <PageContentWrapper>
        <VimeoVideo vimeoId={vimeoId}></VimeoVideo>
        <VideoTitle>{kebabToTitle(name)}</VideoTitle>
      </PageContentWrapper>
    </>
  );
}
