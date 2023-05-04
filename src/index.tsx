import React, { useEffect, lazy } from "react";
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components'
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { Normalize } from 'styled-normalize'
import { Landing } from './pages/Landing'
import DemoReel from './pages/DemoReel';

function Err() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // If somehow we end up on an error page, 
    // just redirect to the landing page
    navigate("/");
  }, []);

  return null;
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial, Helvetica, sans-serif;
  }
`

const router = createBrowserRouter([{
    path: "/",
    element: <Landing />,
    errorElement: <Err/>,
  }, {
    path: "demo-reel",
    element: <DemoReel />
  }
]);

export function App() {
    return (
    <>
      <Normalize/>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>);
  }

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App/>);