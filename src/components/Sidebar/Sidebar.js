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
import { ArquitecturaSistema } from "../ArquitecturaSistema/ArquitecturaSistema";
import { About } from "../About/About";


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
                    <NavLink className="display-6 fs-6" to="/">
                        <i className="fs-6 bi bi-house me-2"></i>Home
                    </NavLink>
                    <NavLink 
                        className="display-6 fs-6"
                        to="/definicion_general"
                    >
                        <i className="fs-6 bi bi-card-checklist me-2"></i>Definicion
                    </NavLink>
                    <NavLink
                        className="display-6 fs-6"
                        to="/requerimientos"
                    >
                        <i className="fs-6 bi bi-list-check me-2"></i>Requerimientos
                    </NavLink>
                    <NavLink
                        className="display-6 fs-6"
                        to="/instalacion_pruebas"
                    >
                        <i className="fs-6 bi bi-download me-2"></i>Instalacion
                    </NavLink>
                    <NavLink
                        className="display-6 fs-6"
                        to="/arquitectura"
                    >
                        <i className="fs-6 bi bi-card-list me-2"></i>Arquitectura
                    </NavLink>
                    <NavLink 
                        className="display-6 fs-6"
                        to="/config_index"
                    >
                        <i className="fs-6 bi bi-card-checklist me-2"></i>Configuración Index
                    </NavLink>
                    <NavLink
                        className="display-6 fs-6"
                        to="/archivo_control_url"
                    >
                        <i className="fs-6 bi bi-cpu me-2"></i>control_url.php
                    </NavLink>
                    <NavLink
                        className="display-6 fs-6"
                        to="/config_htaccess"
                    >
                        <i className="fs-6 bi bi-file-earmark-binary me-2"></i>Estructura .htaccess
                    </NavLink>
                    <NavLink
                        className="display-6 fs-6"
                        to="/archivo_config"
                    >
                        <i className="fs-6 bi bi-gear me-2"></i>config.php
                    </NavLink>
                    <NavLink
                        className="display-6 fs-6"
                        to="/archivo_dependencias"
                    >
                        <i className="fs-6 bi bi-book-half me-2"></i>dependencias.php
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
                                    path="/definicion_general"
                                    component={DefinicionGeneral}
                                />
                                <Route
                                    exact
                                    path="/arquitectura"
                                    component={ArquitecturaSistema}
                                />
                                <Route
                                    exact
                                    path="/instalacion_pruebas"
                                    component={InstalacionPrueba}
                                />
                                <Route
                                    exact
                                    path="/requerimientos"
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
                                <Route
                                    exact
                                    path="/config_index"
                                    component={ConfiguracionIndex}
                                />
                                <Route
                                    exact
                                    path="/config_htaccess"
                                    component={ConfiguracionAccess}
                                />
                                <Route
                                    exact
                                    path="/about"
                                    component={About}
                                />
                                <Route
                                    exact
                                    path="/"
                                    component={Home}
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
