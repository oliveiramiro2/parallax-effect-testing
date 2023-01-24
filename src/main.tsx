import React from "react";
import ReactDOM from "react-dom/client";

import HomeParallax from "./pages";
import "./style/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <HomeParallax />
    </React.StrictMode>
);
