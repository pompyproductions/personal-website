import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import pages
import MasterLayout from "./pages/MasterLayout.jsx"
import "../../dist/style.css"

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <MasterLayout />
        </BrowserRouter>
    </React.StrictMode>
);