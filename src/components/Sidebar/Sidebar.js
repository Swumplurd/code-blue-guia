import React, { useEffect, useState } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { InstalacionPrueba } from "../InstalacionPruba/InstalacionPrueba";
import { DefinicionGeneral } from "../DefinicionGeneral/DefinicionGeneral";
import {Home} from "../Home/Home";

import "./Sidebar.css";

export const Sidebar = () => {
    const [theme, setTheme] = useState(false);

    const handleDark = () => {
        setTheme(!theme);
    };

    useEffect(() => {
        const check = document.getElementById("themeSwitch").checked;
        if (check) {
            document.getElementById("theme").className = "bg-dark text-light";
        } else {
            document.getElementById("theme").className = "bg-white text-dark";
        }
    }, [theme]);
    return (
        <section className="banner">
            <label htmlFor="menu-control" className="hamburger">
                <i className="hamburger__icon bg-secondary"></i>
                <i className="hamburger__icon bg-secondary"></i>
                <i className="hamburger__icon bg-secondary"></i>
            </label>

            <input type="checkbox" id="menu-control" className="menu-control" />

            <aside className="sidebar" style={{ zIndex: "1" }}>
                <nav className="sidebar__menu">
                    <NavLink className="display-6 fs-4" to="/">
                        <i className="fs-4 bi bi-house me-2"></i>Home
                    </NavLink>
                    <NavLink 
                        className="display-6 fs-4"
                        to="/definicion_general"
                    >
                        <i className="fs-4 bi bi-card-checklist me-2"></i>Definicion
                    </NavLink>
                    <NavLink
                        className="display-6 fs-4"
                        to="/instalacion_pruebas"
                    >
                        <i className="fs-4 bi bi-brush me-2"></i>Instalacion
                    </NavLink>
                </nav>

                <label
                    htmlFor="menu-control"
                    className="sidebar__close"
                ></label>

                <ul className="sidebar__social">
                    <li>
                        <div className="form-check form-switch">
                            <input
                                onChange={handleDark}
                                className="form-check-input"
                                type="checkbox"
                                id="themeSwitch"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="themeSwitch"
                            >
                                🌗
                            </label>
                        </div>
                    </li>
                </ul>
            </aside>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div>
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    component={Home}
                                />
                                <Route
                                    exact
                                    path="/definicion_general"
                                    component={DefinicionGeneral}
                                />
                                <Route exact path="/" />
                                <Route
                                    exact
                                    path="/instalacion_pruebas"
                                    component={InstalacionPrueba}
                                />
                                <Route exact path="/" />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
