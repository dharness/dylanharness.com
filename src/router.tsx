import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Projects } from "./pages/motion/Projects";
import { DemoReel } from "./pages/motion/DemoReel";
import { SkiBoots } from "./pages/motion/SkiBoots";
import { BroncoHenry } from "./pages/motion/BroncoHenry";
import { FeeRanger } from "./pages/motion/FeeRanger";
import { FreshCaught } from "./pages/motion/FreshCaught";
import { GatorGum } from "./pages/motion/GatorGum";
import { OverEats } from "./pages/motion/OverEats";
import { PortraitOfALady } from "./pages/motion/PortraitOfALady";
import { Propmaker } from "./pages/motion/Propmaker";
import { PurpleBusiness } from "./pages/motion/PurpleBusiness";
import { Normalize } from "styled-normalize";
import { Page } from "./components/Page";
import { About } from "./pages/motion/About";
import { SoftwareSection } from "./pages/software/SoftwareSection";

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
      <BrowserRouter>
          <ScrollToTop/>
          <Routes>
            {/* ------------------ Motion Design Section  ------------------ */}
            <Route path="/motion" element={<Page content={<Projects />} />} />
            <Route path="/motion/projects" element={<Page content={<Projects />} />} />
            <Route path="/motion/about" element={<Page content={<About />} />} />
            <Route path="/motion/reel" element={<Page content={<DemoReel />} />} />
            <Route path="/motion/ski-boots" element={<Page content={<SkiBoots />} />} />
            <Route path="/motion/bronco-henry" element={<Page content={<BroncoHenry />} />} />
            <Route path="/motion/fee-ranger" element={<Page content={<FeeRanger />} />} />
            <Route path="/motion/fresh-caught" element={<Page content={<FreshCaught />} />} />
            <Route path="/motion/gator-gum" element={<Page content={<GatorGum />} />} />
            <Route path="/motion/over-eats" element={<Page content={<OverEats />} />} />
            <Route path="/motion/portrait-of-a-lady" element={<Page content={<PortraitOfALady />} />} />
            <Route path="/motion/propmaker" element={<Page content={<Propmaker />} />} />
            <Route path="/motion/purple-business" element={<Page content={<PurpleBusiness />} />} />

            {/* ------------------ Software Section  ------------------ */}
            <Route path="*" element={<SoftwareSection />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}
