import React from "react";

export const About = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="display-6">About</h1>
                </div>
            </div>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="border border-primary text-justify p-3">
                        <p className="lead">
                            Code Blue se ensambló en 2021 como un recurso interno del equipo. Encontramos otros repositorios 
                            decepcionantes y queríamos crear una mejor experiencia para navegar y estar al tanto de los últimos 
                            complementos de PHP y jQuery.
                        </p>
                        <p className="lead">
                            Nos hemos esforzado mucho en organizar, categorizar, crear miniaturas y etiquetar complementos en 
                            nuestro sitio y asegurarnos de que todo sea lo más coherente posible. Sin embargo, hay mucho margen 
                            de mejora y nos encantaría su ayuda para mejorar las cosas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};