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
                                <img className="w-25" src="./assets/img/code_blue.png" />
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-center">Una bliblioteca para PHP para la creación de Sistemas WEB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                    <h2 className="h1">Concepto</h2>
                    <p className="lead text-justify">
                        Code Blue en un Framework, que facilita a la cracion de Sistemas WEB, conexión del servido al cliente, a la
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
                        Con nuestras costantes definidas estatiamente para la conexión mediante el Front-End y Back-End de forma mas sencilla,
                        no requieres mas que los conocimientos basicos de PHP, MySQL y JQuery.
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
                                <figcaption class="figure-caption text-end">Institutos Tecnologicos de México</figcaption>
                            </figure>
                        </div>
                        <div className="col-sm-3 mr-2 text-center">
                            <figure class="figure">
                                <img src="./assets/img/itma2.png" class="figure-img img-fluid rounded w-75" alt="..."/>
                                <figcaption class="figure-caption text-end">Instituto Tecnologico de Milpa Alta 2</figcaption>
                            </figure>
                        </div>
                        <div className="col-sm-3 text-center">
                            <figure class="figure">
                                <img src="./assets/img/carrera.png" class="figure-img img-fluid rounded w-75" alt="..."/>
                                <figcaption class="figure-caption text-end">Carrera Ingenieria en Sistemas Computacionales</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};