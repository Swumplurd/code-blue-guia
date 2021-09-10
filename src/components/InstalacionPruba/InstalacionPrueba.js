import React from "react";

export const InstalacionPrueba = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <h1 className="display-4">
                        Procedimientos de instalación y prueba
                    </h1>
                    <hr />

                    <p className="lead text-justify">
                        Para instalar el framework será necesario descargar o
                        clonar el repositorio de GitHub con todos los archivos y
                        carpetas necesarios para su funcionamiento.
                    </p>

                    <p className="lead text-justify mt-2">
                        • Repositorio de GitHub:&nbsp;
                        <a href="https://github.com/Yakumo-Sahashi/project.git">
                            https://github.com/Yakumo-Sahashi/project.git
                        </a>
                    </p>
                    <p className="lead text-justify">
                        Una vez que se hayan descargado todos los archivos
                        necesarios, se deberá modificar el archivo{" "}
                        <span className="fw-bold">config.php </span>
                        dentro de la carpeta{" "}
                        <span className="fw-bold">app</span> en las siguientes
                        líneas:
                    </p>

                    <div className="d-flex justify-content-center m-3">
                        <img
                            src="./assets/img/InstalacionPruebas1.png"
                            className="img-thumbnail"
                            alt="..."
                        />
                    </div>

                    <ul>
                        <li>
                            <p className="lead text-justify">
                                <span className="fw-bold">
                                    NOMBRE_SERVIDOR:{" "}
                                </span>
                                Este define el nombre que tiene nuestro
                                servidor.
                            </p>
                        </li>
                        <li>
                            <p className="lead text-justify">
                                <span className="fw-bold">NOMBRE_BD: </span>
                                Define el nombre de la base de datos que
                                utilizará el sistema.
                            </p>
                        </li>
                        <li>
                            <p className="lead text-justify">
                                <span className="fw-bold">
                                    NOMBRE_USUARIO:{" "}
                                </span>
                                Define el nombre de usuario de MariaDB para
                                poder utilizar la base de datos.
                            </p>
                        </li>
                        <li>
                            <p className="lead text-justify">
                                <span className="fw-bold">PASSWORD: </span>
                                Define la contraseña del usuario de MariaDB.
                            </p>
                        </li>
                        <li>
                            <p className="lead text-justify">
                                <span className="fw-bold">TITULO_PAGINA: </span>
                                Define el título por defecto de las vistas que
                                se crean, solo aplica si no se define un título
                                especifico en la vista.
                            </p>
                        </li>
                        <li>
                            <p className="lead text-justify">
                                <span className="fw-bold">SERVIDOR: </span>
                                Define la URL base del proyecto.
                            </p>
                        </li>
                    </ul>

                    <p className="lead text-justify mt-3">
                        Para probar si el sistema esta funcionando correctamente
                        es necesario activar el servidor Apache en XAMPP o LAMP
                        y escribir la url base del proyecto en nuestro
                        navegador. Si se han realizado las configuraciones
                        correctamente se podrá ver la página de inicio del
                        framework.
                    </p>

                    <div className="d-flex justify-content-center m-3">
                        <img
                            src="./assets/img/InstalacionPruebas2.png"
                            className="img-thumbnail"
                            alt="..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
