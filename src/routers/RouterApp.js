import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Footer } from "../components/Footer/Footer";

export const RouterApp = () => {
    return (
        <Router basename="/code-blue-guia">
            <Sidebar />
            <Footer/>
        </Router>
    );
};
