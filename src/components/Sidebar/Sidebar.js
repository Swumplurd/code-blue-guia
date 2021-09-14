import React, { useEffect, useState } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { InstalacionPrueba } from "../InstalacionPruba/InstalacionPrueba";
import { EspecificacionRequerimientosProyecto } from "../EspecificacionRequerimientosProyecto/EspecificacionRequerimientosProyecto"
import { DefinicionGeneral } from "../DefinicionGeneral/DefinicionGeneral";
import { ArchivoConfig } from "../ArchivoConfig/ArchivoConfig";
import { ArchivoDependencias } from "../ArchivoDependencias/ArchivoDependencias";
import { ConfiguracionIndex } from "../ConfiguracionIndex/ConfiguracionIndex";
import { ConfiguracionAccess } from "../ConfiguracionAccess/ConfiguracionAccess";
import {Home} from "../Home/Home";

import "./Sidebar.css";
import { ArchivoControlUrl } from "../ArchivoControlUrl/ArchivoControlUrl";


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
                    <NavLink
                        className="display-6 fs-4"
                        to="/especificacion_requerimientos_proyecto"
                    >
                        <i className="fs-4 bi bi-list-check me-2"></i>Especificacion de Requerimientos del Proyecto
                    </NavLink>
                    <NavLink
                        className="display-6 fs-4"
                        to="/archivo_config"
                    >
                        <i className="fs-4 bi bi-gear me-2"></i>config.php
                    </NavLink>
                    <NavLink
                        className="display-6 fs-4"
                        to="/archivo_dependencias"
                    >
                        <i className="fs-4 bi bi-book-half me-2"></i>dependencias.php
                    </NavLink>
                    <NavLink
                        className="display-6 fs-4"
                        to="/archivo_control_url"
                    >
                        <i className="fs-4 bi bi-cpu me-2"></i>control_url.php
                    </NavLink>
                    <NavLink
                        className="display-6 fs-4"
                        to="/config_htaccess"
                    >
                        <i className="fs-4 bi bi-file-earmark-binary me-2"></i>Estructura .htaccess
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
                                <Route
                                    exact
                                    path="/especificacion_requerimientos_proyecto"
                                    component={EspecificacionRequerimientosProyecto}
                                />
                                <Route
                                    exact
                                    path="/archivo_config"
                                    component={ArchivoConfig}
                                />
                                <Route
                                    exact
                                    path="/archivo_dependencias"
                                    component={ArchivoDependencias}
                                />
                                <Route
                                    exact
                                    path="/archivo_control_url"
                                    component={ArchivoControlUrl}
                                />
                                <Route exact path="/" />
                                <Route
                                    exact
                                    path="/config_index"
                                    component={ConfiguracionIndex}
                                />
                                <Route exact path="/" />
                                <Route
                                    exact
                                    path="/config_htaccess"
                                    component={ConfiguracionAccess}
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
