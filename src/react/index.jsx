import React from "react";
import ReactDOM from "react-dom/client";

// import pages
import Wip from "./pages/Wip.jsx";
import MasterLayout from "./pages/MasterLayout.jsx"
import "../../dist/style.css"

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<MasterLayout />);