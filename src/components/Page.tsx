import { FC, useLayoutEffect, useState } from "react";
import styled from "styled-components/macro";
import { LandingHeader } from "./LandingHeader";
import { Header } from "./Header";
import React from "react";
import { Footer } from "./Footer";
import { MOBILE_CUTOFF } from "../sharedStyles";

const PageWrapper = styled.div<{ $scrollable: boolean }>`
  display: flex;
  min-height: 100%;
  flex-direction: column;

  overflow: ${(p) => (p.$scrollable ? "" : "clip")};
  height: ${(p) => (p.$scrollable ? "" : "100%")};
`;

enum PageTypeEnum {
  Landing = "Landing",
  Project = "Project",
}

interface PageProps {
  pageType?: PageTypeEnum;
  content: React.ReactNode;
}

export const Page: FC<PageProps> = ({
  pageType = PageTypeEnum.Project,
  content,
}) => {
  const mediaQuery = `(min-width: ${MOBILE_CUTOFF})`;
  const [showOverlay, setShowOverlay] = useState(false);
  const [isScrollable, setIsScrollable] = useState(true);
  const [isMediaQueryMatched, setIsMediaQueryMatched] = useState(
    window.matchMedia(mediaQuery).matches
  );

  useLayoutEffect(() => {
    window.matchMedia(mediaQuery).addEventListener("change", (e) => {
      setIsMediaQueryMatched(e.matches);
    });
  }, []);

  const onToggleOverlay = (isShowingOverlay: boolean) => {
    setIsScrollable(!isShowingOverlay);
    setShowOverlay(isShowingOverlay);
  };

  const renderHeader = () => {
    if (pageType === PageTypeEnum.Landing && isMediaQueryMatched) {
      return (
        <LandingHeader
          onToggleOverlay={onToggleOverlay}
          isMediaQueryMatched={isMediaQueryMatched}
          showOverlay={showOverlay}
        />
      );
    }
    return (
      <Header
        onToggleOverlay={onToggleOverlay}
        isMediaQueryMatched={isMediaQueryMatched}
        showOverlay={showOverlay}
      />
    );
  };

  return (
    <PageWrapper $scrollable={isScrollable}>
      {renderHeader()}
      {content}
      <Footer />
    </PageWrapper>
  );
};
