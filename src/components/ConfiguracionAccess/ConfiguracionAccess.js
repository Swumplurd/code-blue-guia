import React from "react";

export const ConfiguracionAccess = () => {
    return (
        <div className="conatiner mt-5">
            <div className="row justify-content-around">
                <div className="col-md-10 mb-3">
                    <h1 className="display-4">Configuracion .htaccess</h1>
                    <hr/>
                    <p className="lead text-justify">
                        Este archivo tiene como funcion el sobre escribir las reglas del sevidor. Permitiendo simplificar la manera en que se escriben las URL's del sistema y como se interpretan.  
                    </p>
                </div>
                <div className="col-md-10">
                    <h2>Estructura</h2>
                    <hr/>
                    <p className="lead text-justify">
                        <ul>
                            <li><b>Linea 1: </b>Habilita la escritura en el servidor.</li>
                            <li><b>Linea 2: </b>Reescribe la rega por medio de: <br/>
                                <ul>
                                    <li><b>Expresion regula:</b> delimita los caracteres validos que debe contener la URL.</li>
                                    <li><b>index.php:</b> definicion del archivo al cual se va hacer referencia.</li>
                                    <li><b>Variable "view":</b>lojara las vistas solicitada.</li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                    <p className="lead textjustify">
                        El uso de este archivo es el que permite trabajar con URL's Amigables. <b className="text-danger">NO MODIFICAR</b>
                    </p>
                </div>

                <div className="col-md-10">
                    <img src="./assets/img/code_htaccess.png" className="img-thumbnail mx-auto d-block" />
                </div>
            </div>
        </div>
    );
};