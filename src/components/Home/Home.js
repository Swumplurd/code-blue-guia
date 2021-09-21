import React from "react";
import "./Card.css";
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
                <div className="col-md-6">
                    <h2 className="h1">Concepto</h2>
                    <p className="lead text-justify">
                        Code Blue es un Framework, que facilita la creacion de Sistemas WEB, conexión del servido al cliente, a la
                        vez de conectar a una Base de Datos, con la facilidad de nuestras costantes.
                    </p>
                </div>
                <div className="col-md-6">
                    <h2 className="h1">Facilidad de uso</h2>
                    <p className="lead text-justify">
                        Con nuestras constantes definidas estaticamente para la conexión mediante el Front-End y Back-End de forma más sencilla,
                        no requiere más que los conocimientos básicos de PHP, MySQL y JQuery.
                    </p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <p className="lead text-justify">Utilizando los framework y paqueterias</p>
                    <hr/>
                </div>
            </div>

            <div className="cont">
                        <div className="carta">
                            <div className="cara cara1 bootstrap-color">
                                <div className="content">
                                    <i className="fa-5x mx-auto d-block fab fa-bootstrap"></i>
                                    <h3>Bootstrap</h3>
                                </div>
                            </div>
                            <div className="cara cara2">
                                <div className="content">
                                    <p className="texto-justificado">Empiece a utilizar Bootstrap, el marco de trabajo más popular del mundo para crear sitios con capacidad de respuesta para dispositivos móviles, con jsDelivr y una página de inicio de plantilla.</p>
                                    <a className="boton boton1" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank"><p className="texto">Documentacion</p></a>
                                </div>
                            </div>
                        </div>


                        <div className="carta">
                            <div className="cara cara1 datatable-color">
                                <div className="content">
                                    <i className="fa-5x mx-auto d-block fab fa-dyalog"></i>
                                    <h3>DataTable</h3>
                                </div>
                            </div>
                            <div className="cara cara2">
                                <div className="content">
                                    <p className="texto-justificado">DataTable es un complemento de jQuery fácil de usar con una amplia gama de opciones personalizables.</p>
                                    <a className="boton boton1" href="https://datatables.net/examples/basic_init/" target="_blank"><p className="texto">Documentacion</p></a>
                                </div>
                            </div>
                        </div>  

                        <div className="carta">
                            <div className="cara cara1 fontawesome-color">
                                <div className="content">
                                    <i className="fa-5x mx-auto d-block fab fa-font-awesome-flag"></i>
                                    <h3>FontAwesome</h3>
                                </div>
                            </div>
                            <div className="cara cara2">
                                <div className="content">
                                    <p className="texto-justificado">Obtenga iconos y logotipos sociales en Font Awesome, el conjunto de herramientas y el conjunto de iconos más populares de la web.</p>
                                    <a className="boton boton1" href="https://fontawesome.com/" target="_blank"><p className="texto">Documentacion</p></a>
                                </div>
                            </div>
                        </div>  


            </div>

            <div className="row mt-5">
                <div className="col">
                    <p className="lead">
                        En colaboracion con:
                    </p>
                    <div className="row mt-2 justify-content-center">
                        <div className="col-sm-3 mr-2 text-center">
                            <figure className="figure">
                                <img src="./assets/img/tecnm.png" className="figure-img img-fluid rounded" alt="..."/>
                                <figcaption className="figure-caption text-end">Tecnológico Nacional de México</figcaption>
                            </figure>
                        </div>
                        <div className="col-sm-3 mr-2 text-center">
                            <figure className="figure">
                                <img src="./assets/img/itma2.png" className="figure-img img-fluid rounded w-75" alt="..."/>
                                <figcaption className="figure-caption text-end">Instituto Tecnológico de Milpa Alta II</figcaption>
                            </figure>
                        </div>
                        <div className="col-sm-3 text-center">
                            <figure className="figure">
                                <img src="./assets/img/carrera.png" className="figure-img img-fluid rounded w-75" alt="..."/>
                                <figcaption className="figure-caption text-end">Carrera Ingeniería en Sistemas Computacionales</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};