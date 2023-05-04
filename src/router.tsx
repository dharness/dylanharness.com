import React, { useEffect } from "react";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { Projects } from './pages/Projects'
import { DemoReel } from './pages/DemoReel';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import styled from "styled-components";

const PageWrapper = styled.div`
    display: flex;
    height: 100%;
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
      <Header lg={props.lg}/>
      {props.content}
      <Footer/>
    </PageWrapper>
  );
}

Page.defaultProps = {
  lg: false
};

export const router = createBrowserRouter([{
    path: "/",
    element: <Page content={<Projects/>} />,
    errorElement: <Err/>,
  }, {
    path: "demo-reel",
    element: <Page content={<DemoReel/>} />
  }
]);
