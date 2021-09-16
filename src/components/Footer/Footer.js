import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
    <footer className="text-center text-white" style={{backgroundColor: "#073379"}}>
        <div className="container p-4">
            <section className="mb-4">
                <a className="btn btn-outline-light fs-4 rounded-circle m-2" href="https://www.facebook.com/Tecnm-Campus-ITMA2-716244118814478" role="button">
                    <i className="bi bi-facebook"></i>
                </a>
                <a className="btn btn-outline-dark fs-4 rounded-circle m-2" href="#!" role="button">
                    <i className="bi bi-github"></i>
                </a>
                <a className="btn btn-outline-info fs-4 rounded-circle m-2" href="http://www.itmilpaalta2.net/" role="button">
                    <i className="bi bi-globe"></i>
                </a>
                <Link className="btn btn-outline-secondary fs-5 m-2" to="/about" role="button">
                    About
                </Link>
            </section>
            <section className="mb-4">
                <p>
                    Los colaboradores, como los supervisores del Framework son:
                </p>
            </section>
            <section className="">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h3 className="">Superevisores:</h3>
                        <ul className="list-unstyled text-start mb-0">
                            <li>
                                <p className="text-white p-0 m-0">Ing. Omar Jesús Peréz Ramos</p>
                            </li>
                            <li>
                                <p className="text-white p-0 m-0">Ing. Enrique Calderas Martínez</p>
                            </li>
                            <li>
                                <p className="text-white p-0 m-0">Ing. Roldan Aquino Segura</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-8 col-md-6 mb-4 mb-md-0">
                        <h3 className="">Colaboradores:</h3>
                        <ul className="list-unstyled text-start mb-0">
                            <div className="row">
                                <div className="col">
                                    <li>
                                        <p className="text-white p-0 m-0">Ing. Diego Alberto Bollas Paredes</p>
                                    </li>
                                    <li>
                                        <p className="text-white p-0 m-0">Ing. Fernando Said Vasquez Tello</p>
                                    </li>
                                    <li>
                                        <p className="text-white p-0 m-0">Ing. Jiménez Montes Guillermo</p>
                                    </li>
                                    <li>
                                        <p className="text-white p-0 m-0">Ing. Mario Arriaga Colin</p>
                                    </li>
                                </div>
                                <div className="col">
                                    <li>
                                        <p className="text-white p-0 m-0">Ing. Carlos Eduardo Ayala Galarza</p>
                                    </li>
                                    <li>
                                        <p className="text-white p-0 m-0">Ing. Miguel Angel Posada Ibañez</p>
                                    </li>
                                    <li>
                                        <p className="text-white p-0 m-0"></p>
                                    </li>
                                    <li>
                                        <p className="text-white p-0 m-0"></p>
                                    </li>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
            © {year} Code Blue
        </div>
    </footer>
    );
};