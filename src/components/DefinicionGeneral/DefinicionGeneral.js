import React from "react";

export const DefinicionGeneral = () => {
    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
            <div className="row">
                <div className="col">
                    <h1 className="display-4">
                        Definición General
                    </h1>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="lead text-justify">
                        Se presenta un framework de desarrollo web basado en el modelo MVC (Modelo Vista Controlador) 
                        que separa los datos y la lógica de control, proporciona una mejor división del trabajo y 
                        facilita el mantenimiento. Este modelo fue implementado por Trygve Reenskaug en los años 70 y 
                        su uso se ha extendido ampliamente desde entonces.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="lead text-justify">
                        Por convención se utiliza la siguiente estructura de carpetas:
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="text-center">
                        <img src="./assets/img/DefinicionGeneral1.png" className="img-thumbnail" alt="Definicion general 1"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="lead text-justify">
                        A grandes rasgos la carpeta app tiene la funcionalidad de almacenar la paquetería, 
                        configuraciones necesarias, las dependencias de la paquetería y de ser necesario la 
                        base de datos
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="lead text-justify">
                        La carpeta controller contiene la lógica que actualiza el modelo y/o vista en 
                        respuesta a las entradas de usuario en la aplicación.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="lead text-justify">
                        La carpeta model define los datos que debe contener la aplicación y notifica a la 
                        vista o al controlador según sea necesario del lado del servidor.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="lead text-justify">
                        Dentro la carpeta public se encuentran los archivos de hoja de estilos, scripts, fuentes e 
                        imágenes que requiera el proyecto o archivos de dependencias que se puedan utilizar.
                    </p>
                </div>
            </div>
        </div>
    );
};