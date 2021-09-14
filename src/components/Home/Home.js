import React from "react";

export const Home = () => {
    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
            <div className="row mb-5">
                <div className="col">
                    <div className="row">
                        <div className="col align-self-end">
                            <h1 className="display-3">
                                Code Blue 
                            </h1>
                        </div>
                        <div className="col align-self-start">
                            <div className="text-center">
                                <img alt="..." className="w-25" src="./assets/img/code_blue.png" />
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-center">Una biblioteca para PHP para la creación de Sistemas WEB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                    <h2 className="h1">Concepto</h2>
                    <p className="lead text-justify">
                        Code Blue es un Framework, que facilita la creacion de Sistemas WEB, conexión del servido al cliente, a la
                        vez de conectar a una Base de Datos, con la facilidad de nuestras costantes.
                    </p>
                </div>
                <div className="col-md-4">
                    <h2 className="h1">Generado Por:</h2>
                    <p className="lead text-justify">
                        El Framework fu creado por nuestro fundador, Diego Alberto Bollas Paredes, para tener una facilidad de uso 
                        en cualquier sistema (Windows, Linux, MacOS).
                    </p>
                </div>
                <div className="col-md-4">
                    <h2 className="h1">Facilidad de uso</h2>
                    <p className="lead text-justify">
                        Con nuestras constantes definidas estaticamente para la conexión mediante el Front-End y Back-End de forma más sencilla,
                        no requiere más que los conocimientos básicos de PHP, MySQL y JQuery.
                    </p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead">
                        En colaboracion con:
                    </p>
                    <div className="row mt-2 justify-content-center">
                        <div className="col-sm-3 mr-2 text-center">
                            <figure class="figure">
                                <img src="./assets/img/tecnm.png" class="figure-img img-fluid rounded" alt="..."/>
                                <figcaption class="figure-caption text-end">Tecnológico Nacional de México</figcaption>
                            </figure>
                        </div>
                        <div className="col-sm-3 mr-2 text-center">
                            <figure class="figure">
                                <img src="./assets/img/itma2.png" class="figure-img img-fluid rounded w-75" alt="..."/>
                                <figcaption class="figure-caption text-end">Instituto Tecnológico de Milpa Alta II</figcaption>
                            </figure>
                        </div>
                        <div className="col-sm-3 text-center">
                            <figure class="figure">
                                <img src="./assets/img/carrera.png" class="figure-img img-fluid rounded w-75" alt="..."/>
                                <figcaption class="figure-caption text-end">Carrera Ingeniería en Sistemas Computacionales</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};