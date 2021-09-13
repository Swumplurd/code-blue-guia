import React from "react";

export const ConfiguracionIndex = () => {
    return (
        <div className="conatiner mt-5">
             <div class="row justify-content-around">
                <div class="col-md-10 mb-3">
                    <h1 class="display-4">Estructura index.php</h1>
                    <hr/>
                    <p class="lead text-justify">
                        El archivo index.php es el elemento central del sistema. En este se muestran todas las vistas que solicita el usuario, mediante un extricto sistema de validaciones. Como se hace refwerencia en el titulo el lenguaje de programacion utilizado es<a href="https://www.php.net/docs.php" className="btn btn-link" target="_blank">PHP.</a>
                    </p>
                </div>
                <div class="col-md-10 mb-4">
                    <h2>Estructura</h2>
                    <hr/>
                    <p class="lead text-justify">
                        El archivo consta de 16 lineas de codigo entre ellas codigo HTML y PHP. Su funcionamiento parte directamente del modelo MVC (Modelo Vista Controlador) complementado del sistema de URL's Amigables.
                    </p>
                    <img src="./assets/img/code_index.png" className="img-thumbnail mx-auto d-block" />                    
                </div>
                <div className="col-md-10 mb-4">
                    <h2>control_url.php</h2>
                    <hr/>
                    <p className="lead text-justify">
                        La funcion de este archivo es controlar a el direccionamiento de la pagina trayendo la vista solicitada o en su defecto un mensaje de error.
                    </p>
                    <p className="lead text-justify">
                        La ultima liena de codigo combina HTML y PHP. Esta se encarga de asignar un titulo a la pagina dependiendo del tipo de vista solicitada.
                    </p>
                    <img src="./assets/img/code_control_url.png" className="img-thumbnail mx-auto d-block" />         
                </div>
            </div>
        </div>
    );
};