import React from "react";
import "./ArquitecturaSistema.css";
export const ArquitecturaSistema = () => {

    return(

        <div className="container mt-5 animate__animated animate__fadeIn">
            <div className="row">
                <div className="col-md-10">
                    <h1 className="display-4">Arquitectura del Sistema</h1>
                    <hr />
                </div>
                <div className="col-md-10">
                    <div className="row g-0">
                        <div className="col-md-4 mb-4">
                            <img alt="..." src="assets/img/app.png"
                                className="img-fluid rounded border border-dark rounded mx-auto d-block" />
                        </div>
                        <div className="col-md-8 mb-4">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item noBack">
                                    <h2 class="accordion-header " id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <b className="rojo">app</b>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="lead">Contiene los archivos de configuración del sistema, librerías (lib), dependencias
                                                y respaldos de la base de datos (db).</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item noBack">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <b className="amarillo">bd</b>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p className="lead">Carpeta contenedora de respaldos de la base de datos.Carpeta contenedora de
                                                respaldos de la base de datos.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item noBack">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <b className="verde">lib</b>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p className="lead">Carpeta contenedora de librerías.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr>
                    </hr>

                    <div className="row g-0">
                        <div className="col-md-4 mb-4">
                            <img alt="..." src="assets/img/controller.png"
                                className="img-fluid rounded border border-dark rounded mx-auto d-block" />
                        </div>
                        <div className="col-md-8 mb-4">
                            <div className="accordion" id="accordionController">
                                <div className="accordion-item noBack">
                                    <h2 className="accordion-header" id="headingController">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseController" aria-expanded="true"
                                            aria-controls="collapseController">
                                            <b className="amarillo">controller</b>
                                        </button>
                                    </h2>
                                    <div id="collapseController" className="accordion-collapse collapse show"
                                        aria-labelledby="headingController" data-bs-parent="#accordionController">
                                        <div className="accordion-body">
                                            <p className="lead">
                                                Carpeta contenedora de archivos js (JavaScript) los cuales fungirán como
                                                mediadores entre la vista y el modelo.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr>
                    </hr>

                    <div className="row g-0">
                        <div className="col-md-4 mb-4">
                            <img alt="..." src="assets/img/model.png"
                                className="img-fluid rounded border border-dark rounded mx-auto d-block" />
                        </div>
                        <div className="col-md-8 mb-4">
                            <div className="accordion" id="accordionModel">
                                <div className="accordion-item noBack">
                                    <h2 className="accordion-header" id="headingModel">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseModel" aria-expanded="true" aria-controls="collapseModel">
                                            <b className="rojo">model</b>
                                        </button>
                                    </h2>
                                    <div id="collapseModel" className="accordion-collapse collapse show"
                                        aria-labelledby="headingModel" data-bs-parent="#accordionModel">
                                        <div className="accordion-body">
                                            <p className="lead">
                                                Carpeta contenedora de archivos (php) encargados de la gestión de datos de la
                                                aplicación del lado del servidor.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr>
                    </hr>

                    <div className="row g-0">
                        <div className="col-md-4 mb-4 mr-5">
                            <img alt="..." src="assets/img/public.png"
                                className="img-fluid rounded border border-dark rounded mx-auto d-block" />
                        </div>
                        <div className="col-md-8 mb-4">
                            <div className="accordion" id="accordionPublic">
                                <div className="accordion-item noBack">
                                    <h2 className="accordion-header" id="headingPOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsePOne" aria-expanded="true" aria-controls="collapsePOne">
                                            <b className="azul">public</b>
                                        </button>
                                    </h2>
                                    <div id="collapsePOne" className="accordion-collapse collapse show"
                                        aria-labelledby="headingPOne" data-bs-parent="#accordionPublic">
                                        <div className="accordion-body">
                                            <p className="lead">Carpeta contenedora de archivos de acceso público.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item noBack">
                                    <h2 className="accordion-header" id="headingPTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsePTwo" aria-expanded="false" aria-controls="collapsePTwo">
                                            <b className="azul">css</b>
                                        </button>
                                    </h2>
                                    <div id="collapsePTwo" className="accordion-collapse collapse" aria-labelledby="headingPTwo"
                                        data-bs-parent="#accordionPublic">
                                        <div className="accordion-body">
                                            <p className="lead">Esta contiene los archivos de estilos (css).</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item noBack">
                                    <h2 className="accordion-header" id="headingPThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsePThree" aria-expanded="false"
                                            aria-controls="collapsePThree">
                                            <b className="files">files</b>
                                        </button>
                                    </h2>
                                    <div id="collapsePThree" className="accordion-collapse collapse"
                                        aria-labelledby="headingPThree" data-bs-parent="#accordionPublic">
                                        <div className="accordion-body">
                                            <p className="lead">Contenedora de archivos y documentos multimedia.
                                                <br />-audio (mp3, wav, ogg)
                                                <br />-doc (Word)
                                                <br />-pdf (pdf)
                                                <br />-video (mp4, 3gp, wmv, avi, flv, mkv)
                                                <br />-xlsx (Excel)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item noBack">
                                    <h2 className="accordion-header" id="headingPFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsePFour" aria-expanded="false" aria-controls="collapsePFour">
                                            <b className="rojo">fonts</b>
                                        </button>
                                    </h2>
                                    <div id="collapsePFour" className="accordion-collapse collapse"
                                        aria-labelledby="headingPFour" data-bs-parent="#accordionPublic">
                                        <div className="accordion-body">
                                            <p className="lead">Tiene almacenadas las fuentes de la aplicación.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item noBack">
                                    <h2 className="accordion-header" id="headingPFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsePFive" aria-expanded="false" aria-controls="collapsePFive">
                                            <b className="verde">img</b>
                                        </button>
                                    </h2>
                                    <div id="collapsePFive" className="accordion-collapse collapse"
                                        aria-labelledby="headingPFive" data-bs-parent="#accordionPublic">
                                        <div className="accordion-body">
                                            <p className="lead">Almacena los archivos de tipo imagen (jpg, png, bmp, gif).</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item noBack">
                                    <h2 className="accordion-header" id="headingPSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsePSix" aria-expanded="false" aria-controls="collapsePSix">
                                            <b className="amarillo">js</b>
                                        </button>
                                    </h2>
                                    <div id="collapsePSix" className="accordion-collapse collapse" aria-labelledby="headingPSix"
                                        data-bs-parent="#accordionPublic">
                                        <div className="accordion-body">
                                            <p className="lead">Esta contiene los archivos de JavaScript.</p>
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                    <hr>
                    </hr>

                    <div className="row g-0">
                        <div className="col-md-4 mb-4">
                            <img alt="..." src="assets/img/view.png"
                                className="img-fluid rounded border border-dark rounded mx-auto d-block" />
                        </div>
                        <div className="col-md-8 mb-4">
                            <div className="accordion" id="accordionView">
                                <div className="accordion-item noBack">
                                    <h2 className="accordion-header" id="headingView">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseView" aria-expanded="true" aria-controls="collapseView">
                                            <b className="naranja">view</b>
                                        </button>
                                    </h2>
                                    <div id="collapseView" className="accordion-collapse collapse show"
                                        aria-labelledby="headingView" data-bs-parent="#accordionView">
                                        <div className="accordion-body">
                                            <p className="lead">
                                                Carpeta contenedora de los apartados visuales del sistema (interfaces gráficas).
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr>
                    </hr>


                </div>
            </div>
        </div>



    );


};
