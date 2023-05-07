import React, { useEffect, useState } from "react";
import {
  HashRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import styled, { createGlobalStyle } from "styled-components";
import { Projects } from "./pages/Projects";
import { DemoReel } from "./pages/DemoReel";
import { SkiBoots } from "./pages/SkiBoots";
import { BroncoHenry } from "./pages/BroncoHenry";
import { FeeRanger } from "./pages/FeeRanger";
import { FreshCaught } from "./pages/FreshCaught";
import { GatorGum } from "./pages/GatorGum";
import { OverEats } from "./pages/OverEats";
import { PortraitOfALady } from "./pages/PortraitOfALady";
import { Propmaker } from "./pages/Propmaker";
import { PurpleBusiness } from "./pages/PurpleBusiness";
import { Normalize } from "styled-normalize";

const PageWrapper = styled.div<{ $scrollable: boolean }>`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background: tan;
  overflow: ${(p) => (p.$scrollable ? "" : "clip")};
  height: ${(p) => (p.$scrollable ? "" : "100%")};
`;

function Err() {
  const navigate = useNavigate();

  useEffect(() => {
    // If somehow we end up on an error page,
    // just redirect to the landing page
    navigate("/");
  }, []);

  return null;
}

function Page(props: any) {
  const [isScrollable, setIsScrollable] = useState(true);

  const onToggleOverlay = (isShowingOverlay: boolean) => {
    setIsScrollable(!isShowingOverlay);
  };
  return (
    <PageWrapper $scrollable={isScrollable}>
      <Header lg={props.lg} onToggleOverlay={onToggleOverlay} />
      {props.content}
      <Footer />
    </PageWrapper>
  );
}

Page.defaultProps = {
  lg: false,
};

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Arial, Helvetica, sans-serif;
    opacity: 1;
  }
`;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// prettier-ignore
export function Router() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <HashRouter>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Page content={<Projects />} lg={true} />} />
            <Route path="/projects" element={<Page content={<Projects />} lg={true} />} />
            <Route path="/reel" element={<Page content={<DemoReel />} />} />
            <Route path="/ski-boots" element={<Page content={<SkiBoots />} />} />
            <Route path="/bronco-henry" element={<Page content={<BroncoHenry />} />} />
            <Route path="/fee-ranger" element={<Page content={<FeeRanger />} />} />
            <Route path="/fresh-caught" element={<Page content={<FreshCaught />} />} />
            <Route path="/gator-gum" element={<Page content={<GatorGum />} />} />
            <Route path="/over-eats" element={<Page content={<OverEats />} />} />
            <Route path="/portrait-of-a-lady" element={<Page content={<PortraitOfALady />} />} />
            <Route path="/propmaker" element={<Page content={<Propmaker />} />} />
            <Route path="/purple-business" element={<Page content={<PurpleBusiness />} />} />
          </Routes>
      </HashRouter>
    </>
  );
}
