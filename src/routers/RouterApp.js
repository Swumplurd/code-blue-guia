import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const RouterApp = () => {
    return (
        <Router>
            <Sidebar />
        </Router>
    );
};
