import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components/macro";
import { MOBILE_CUTOFF, contentWidthStyle } from "../../sharedStyles";
import Sidebar from "./components/Sidebar";
import SidebarItem from "./components/SidebarItem";
import SidebarSection from "./components/SidebarSection";
import logo from "./../../assets/software/logo.svg";
import { useLocation } from "react-router-dom";

const SoftwareSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 36px;
  background: plum;
  max-width: 1380px;
  margin: auto;
`;

const SoftwareSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  ${contentWidthStyle};
  @media (max-width: ${MOBILE_CUTOFF}) {
    width: 100%;
  }
`;

const LogoSection = styled.div`
  display: flex;
`;

const projctsConfig = [
  {
    text: "Sqwak",
  },
  {
    text: "Yogoflow",
  },
  {
    text: "react-chat-window",
  },
  {
    text: "seam-carving",
  },
  {
    text: "Mr Makes a Word",
  },
  {
    text: "Projection Mapping",
  },
];

export function SoftwareSection(props: any) {
  // const mediaQuery = `(min-width: ${MOBILE_CUTOFF})`;
  // const [showOverlay, setShowOverlay] = useState(false);
  // const [isScrollable, setIsScrollable] = useState(true);
  // const [isMediaQueryMatched, setIsMediaQueryMatched] = useState(
  //   window.matchMedia(mediaQuery).matches
  // );

  // const location = useLocation();

  // useLayoutEffect(() => {
  //   window.matchMedia(mediaQuery).addEventListener("change", (e) => {
  //     setIsMediaQueryMatched(e.matches);
  //   });
  // }, []);

  // const toggleOverlay = (isShowingOverlay: boolean) => {
  //   setIsScrollable(!isShowingOverlay);
  //   setShowOverlay(isShowingOverlay);
  // };

  // if (isMediaQueryMatched) {
  //   toggleOverlay(false);
  // }

  // useEffect(() => {
  //   toggleOverlay(false);
  // }, [location]);

  return (
    <>
      <SoftwareSectionWrapper>
        <SoftwareSectionContent>
          <Sidebar>
            <LogoSection>
              <img src={logo} alt="" />
              <div>
                Dylan <br />
                Harness
              </div>
            </LogoSection>
            <SidebarSection>
              <SidebarItem text={"About"} onClick={() => {}} />
            </SidebarSection>

            <SidebarSection title="Projects">
              {projctsConfig.map(({ text }) => (
                <SidebarItem key={text} text={text} onClick={() => {}} />
              ))}
            </SidebarSection>

            <SidebarSection title="More">
              <SidebarItem text={"LinkedIn"} onClick={() => {}} />
              <SidebarItem text={"MotionDesign"} onClick={() => {}} />
              <SidebarItem text={"Github"} onClick={() => {}} />
              <SidebarItem text={"Email"} onClick={() => {}} />
            </SidebarSection>
          </Sidebar>
        </SoftwareSectionContent>
      </SoftwareSectionWrapper>
    </>
  );
}
