import React from "react";
import { createRoot } from "react-dom/client";
import { Router } from "./router";
import { mrMakesStyle } from "./pages/software/mr-makes-styles";

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(<Router />);
