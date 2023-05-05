import React, { useEffect } from "react";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import styled from "styled-components";
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

const PageWrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background: tan;
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
  return (
    <PageWrapper>
      <Header lg={props.lg} />
      {props.content}
      <Footer />
    </PageWrapper>
  );
}

Page.defaultProps = {
  lg: false,
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Page content={<Projects />} lg={true} />,
    errorElement: <Err />,
  },
  {
    path: "demo-reel",
    element: <Page content={<DemoReel />} />,
  },
  {
    path: "ski-boots",
    element: <Page content={<SkiBoots />} />,
  },
  {
    path: "bronco-henry",
    element: <Page content={<BroncoHenry />} />,
  },
  {
    path: "fee-ranger",
    element: <Page content={<FeeRanger />} />,
  },
  {
    path: "fresh-caught",
    element: <Page content={<FreshCaught />} />,
  },
  {
    path: "gator-gum",
    element: <Page content={<GatorGum />} />,
  },
  {
    path: "over-eats",
    element: <Page content={<OverEats />} />,
  },
  {
    path: "portrait-of-a-lady",
    element: <Page content={<PortraitOfALady />} />,
  },
  {
    path: "propmaker",
    element: <Page content={<Propmaker />} />,
  },
  {
    path: "purple-business",
    element: <Page content={<PurpleBusiness />} />,
  },
]);
