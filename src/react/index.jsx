import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import pages
import MasterLayout from "./pages/MasterLayout.jsx"
import Landing from "./pages/Landing.jsx"
import "../../dist/style.css"

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<MasterLayout />}/>
                <Route path="/landing" element={<Landing />}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);