import React from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { router } from "./router";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<App />);
