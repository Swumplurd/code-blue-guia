import React from "react";
import "./EspecificacionRequerimientosProyecto.css";
export const EspecificacionRequerimientosProyecto = () => {
    let vsc = "https://code.visualstudio.com/";
    let download_vsc = "https://code.visualstudio.com/Download";
    let sublime = "https://www.sublimetext.com/";
    let download_sublime = "https://www.sublimetext.com/download";
    let php = "https://www.php.net/manual/es/intro-whatis.php";
    let xampp = "https://www.apachefriends.org/es/index.html";
    let download_xampp = "https://www.apachefriends.org/es/download.html";
    let fde = "https://www.mozilla.org/es-MX/firefox/developer/";
    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
            <div className="row">
                <div className="col">
                    <h1 className="display-4">Especificación de Requerimientos del Proyecto</h1>
                    <hr/>
                    <p className="lead">Para la utilización del framework será necesario contar con las siguientes herramientas:</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul>
                        <li>Editor de texto (se recomienda Visual Studio Code o Sublime Text 3).</li>
                        <li>PHP 8.</li>
                        <li>Stack de herramientas de desarrollo (XAMPP o LAMP).</li>
                        <li>Navegador (Se recomienda Chrome Canary o Firefox Developer Edition por su alta compatibilidad con HTML5 y herramientas para desarrollo).</li>
                    </ul>
                </div>    
            </div>
            <div className="row mt-4">
                <div className="col">
                    <h2>Visual Studio Code</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <img src="assets/img/vsc.png" className="img-fluid rounded border border-dark rounded" width="100%" alt="..."/>
                </div>
                <div className="col-md-9">
                    <p className="lead">Visual Studio Code es un editor de código fuente ligero pero potente que se ejecuta en su escritorio y está disponible para Windows, macOS y Linux. Viene con soporte integrado para JavaScript, TypeScript y Node.js y tiene un rico ecosistema de extensiones para otros lenguajes (como C ++, C #, Java, Python, PHP, Go) y tiempos de ejecución (como .NET y Unity).</p>
                    <div className="text-center">
                        <div className="btn-group mt-4">
                            <span className="btn btn-primary"><a href={vsc} className="text-white"><i className="fas fa-home"></i>Página oficial</a></span>
                            <span className="btn btn-primary"><a href={download_vsc} className="text-white"><i className="fas fa-download"></i>Descargar</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <h2>Sublime Text 3</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <img src="assets/img/sublime.svg" className="img-fluid rounded border border-dark rounded" width="100%" alt="..."/>
                </div>
                <div className="col-md-9">
                    <p className="lead">Sublime Text es un editor de código multiplataforma, ligero y con pocas concesiones a las florituras. Es una herramienta concebida para programar sin distracciones. Su interfaz de color oscuro y la riqueza de coloreado de la sintaxis, centra nuestra atención completamente.</p>
                    <div className="text-center">
                        <div className="btn-group mt-4">
                            <span className="btn btn-primary"><a href={sublime} className="text-white"><i className="fas fa-home"></i>Página oficial</a></span>
                            <span className="btn btn-primary"><a href={download_sublime} className="text-white"><i className="fas fa-download"></i>Descargar</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <h2>PHP 8</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <img src="assets/img/php.png" className="img-fluid rounded border border-dark rounded" width="100%" alt="..."/>
                </div>
                <div className="col-md-9">
                    <p className="lead">PHP (acrónimo recursivo de PHP: Hypertext Preprocessor) es un lenguaje de código abierto muy popular especialmente adecuado para el desarrollo web y que puede ser incrustado en HTML. </p>
                    <div className="text-center">
                        <div className="btn-group mt-4">
                            <span className="btn btn-primary"><a href={php} className="text-white"><i className="fas fa-home"></i>Página oficial</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <h2>XAMPP</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <img src="assets/img/xampp.svg" className="img-fluid rounded border border-dark rounded" width="100%" alt="..."/>
                </div>
                <div className="col-md-9">
                    <p className="lead">XAMPP es el entorno más popular de desarrollo con PHP, XAMPP es una distribución de Apache completamente gratuita y fácil de instalar que contiene MariaDB, PHP y Perl. El paquete de instalación de XAMPP ha sido diseñado para ser increíblemente fácil de instalar y usar.</p>
                    <div className="text-center">
                        <div className="btn-group mt-4">
                            <span className="btn btn-primary"><a href={xampp} className="text-white"><i className="fas fa-home"></i>Página oficial</a></span>
                            <span className="btn btn-primary"><a href={download_xampp} className="text-white"><i className="fas fa-download"></i>Descargar</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <h2>Firefox Developer Edition</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <img src="assets/img/firefox_developer_edition.svg" className="img-fluid rounded border border-dark rounded" width="100%" alt="..."/>
                </div>
                <div className="col-md-9">
                    <p className="lead">Todas las herramientas para desarrolladores más recientes de la versión beta, además de funcionalidades experimentales como el editor multilínea de consola y el inspector de WebSocket.</p>
                    <p className="lead">Un perfil y ruta separados para que puedas ejecutarlo fácilmente en paralelo a la versión oficial o Beta de Firefox.</p>
                    <p className="lead">Preferencias personalizadas para desarrolladores web: el navegador y la depuración remota están activados de forma predeterminada, al igual que el tema oscuro y el botón de la barra de herramientas para desarrolladores.</p>
                    <div className="text-center">
                        <div className="btn-group mt-4">
                            <span className="btn btn-primary"><a href={fde} className="text-white"><i className="fas fa-home"></i>Página oficial</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead">El alcance de este framework se limita al desarrollo de aplicaciones web basadas en el modelo MVC y algunos de sus derivados como HMVC, MVA, MVP o MVVM, pero puede ser modificado en base a las necesidades del proyecto a desarrollar.</p>
                </div>
            </div>
        </div>
    );
};