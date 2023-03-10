import React from "react";
import ReactDOM from "react-dom/client";
import { ParallaxProvider } from "react-scroll-parallax";

import HomeParallax from "./pages";
import "./style/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ParallaxProvider>
        <React.StrictMode>
            <HomeParallax />
        </React.StrictMode>
    </ParallaxProvider>
);
