import React from "react";
import "./ArchivoConfig.css";

export const ArchivoConfig = () => {
    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
        <div className="row">
            <div className="col mt-4">
                <h1 className="display-4">config.php</h1>
                <hr/>
                <p className="lead">Este archivo contiene las constantes necesarias para que el framework funcione correctamente y sus valores pueden ser modificados en base a las necesidades del proyecto.</p>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <h2>Credenciales para la BD</h2>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <table className="table border border-secondary table-body">
                    <thead className="table-head">
                        <tr>
                            <th scope="col">Nombre de constante</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor por defecto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-constante">NOMBRE_SERVIDOR</td>
                            <td className="text-muted">String</td>
                            <td>Define el nombre del servidor que usará el proyecto.</td>
                            <td className="text-valor">"localhost"</td>
                        </tr>
                        <tr>
                            <td className="text-constante">NOMBRE_BD</td>
                            <td className="text-muted">String</td>
                            <td>Define el nombre de la base de datos que usará el proyecto.</td>
                            <td className="text-valor">"test"</td>
                        </tr>
                        <tr>
                            <td className="text-constante">NOMBRE_USUARIO</td>
                            <td className="text-muted">String</td>
                            <td>Define el nombre de usuario de nuestro gestor de base de datos.</td>
                            <td className="text-valor">"root"</td>
                        </tr>
                        <tr>
                            <td className="text-constante">PASSWORD</td>
                            <td className="text-muted">String</td>
                            <td>Define la contraseña de usuario de nuestro gestor de base de datos.</td>
                            <td className="text-valor">""</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <h2>Título y URL base</h2>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <table className="table border border-secondary table-body">
                    <thead className="table-head">
                        <tr>
                            <th scope="col">Nombre de constante</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor por defecto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-constante">TITULO_PAGINA</td>
                            <td className="text-muted">String</td>
                            <td>Define el titulo de la página web en caso de que no se defina en la vista correspondiente.</td>
                            <td className="text-valor">"Project"</td>
                        </tr>
                        <tr>
                            <td className="text-constante">SERVIDOR</td>
                            <td className="text-muted">String</td>
                            <td>Define la url base del proyecto.</td>
                            <td className="text-valor">"http://localhost/project/"</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <h2>Dependencias de CSS</h2>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <table className="table border border-secondary table-body">
                    <thead className="table-head">
                        <tr>
                            <th scope="col">Nombre de constante</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor por defecto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-constante">DEP_CSS</td>
                            <td className="text-muted">String</td>
                            <td>Define la ruta de las dependencias de CSS para el proyecto. Se debe incluir la constante <b>"SERVIDOR"</b> y concatenar el resto de la ruta de la carpeta con los archivos CSS.</td>
                            <td className="text-valor"><span className="text-constante">SERVIDOR</span> . "public/css/"</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <h2>Dependencias de JavaScript</h2>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <table className="table border border-secondary table-body">
                    <thead className="table-head">
                        <tr>
                            <th scope="col">Nombre de constante</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor por defecto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-constante">DEP_SCRIPT</td>
                            <td className="text-muted">String</td>
                            <td>Define la ruta de las dependencias de JavaScript (js) para el proyecto. Se debe incluir la constante <b>"SERVIDOR"</b> y concatenar el resto de la ruta de la carpeta con los archivos js.</td>
                            <td className="text-valor"><span className="text-constante">SERVIDOR</span> . "public/js/"</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <h2>Dependencias de Imágenes</h2>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <table className="table border border-secondary table-body">
                    <thead className="table-head">
                        <tr>
                            <th scope="col">Nombre de constante</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor por defecto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-constante">DEP_IMG</td>
                            <td className="text-muted">String</td>
                            <td>Define la ruta de las dependencias de imágenes para el proyecto. Se debe incluir la constante <b>"SERVIDOR"</b> y concatenar el resto de la ruta de la carpeta con los archivos js.</td>
                            <td className="text-valor"><span className="text-constante">SERVIDOR</span> . "public/img/"</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <h2>Dependencias de Controladores</h2>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <table className="table border border-secondary table-body">
                    <thead className="table-head">
                        <tr>
                            <th scope="col">Nombre de constante</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor por defecto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-constante">CONTROLLER</td>
                            <td className="text-muted">String</td>
                            <td>Define la ruta de los controladores o funciones de JavaScript que se creen en el proyecto.</td>
                            <td className="text-valor"><span className="text-constante">SERVIDOR</span> . "controller"</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <h2>Rutas de Archivos Varios</h2>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <table className="table border border-secondary table-body">
                    <thead className="table-head">
                        <tr>
                            <th scope="col">Nombre de constante</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor por defecto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-constante">AUDIO</td>
                            <td className="text-muted">String</td>
                            <td>Define la ruta de los archivos de audio (mp3, wav, ogg, etc.) que se utilicen o se guarden dentro del proyecto.</td>
                            <td className="text-valor">"public/files/audio/"</td>
                        </tr>
                        <tr>
                            <td className="text-constante">DOC</td>
                            <td className="text-muted">String</td>
                            <td>Define la ruta de los archivos de procesador de texto (doc, docx, rtf, etc.) que se utilicen o se guarden dentro del proyecto.</td>
                            <td className="text-valor">"public/files/doc/"</td>
                        </tr>
                        <tr>
                            <td className="text-constante">PDF</td>
                            <td className="text-muted">String</td>
                            <td>Define la ruta de los archivos pdf que se utilicen o se guarden dentro del proyecto.</td>
                            <td className="text-valor">"public/files/pdf/"</td>
                        </tr>
                        <tr>
                            <td className="text-constante">VIDEO</td>
                            <td className="text-muted">String</td>
                            <td>Define la ruta de los archivos de video (mp4, 3gp, avi, etc.) que se utilicen o se guarden dentro del proyecto.</td>
                            <td className="text-valor">"public/files/video/"</td>
                        </tr>
                        <tr>
                            <td className="text-constante">EXCEL</td>
                            <td className="text-muted">String</td>
                            <td>Define la ruta de los archivos de hoja de cálculo (xls, xlsx) que se utilicen o se guarden dentro del proyecto.</td>
                            <td className="text-valor">"public/files/xlsx/"</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <h2>Archivos de error</h2>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <table className="table border border-secondary table-body">
                    <thead className="table-head">
                        <tr>
                            <th scope="col">Nombre de constante</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor por defecto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-constante">error</td>
                            <td className="text-muted">String</td>
                            <td>Define la ruta de las vistas de error que se utilicen dentro del proyecto.</td>
                            <td className="text-valor">"view/404"</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <h2>Direcciones URL amigables</h2>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <table className="table border border-secondary table-body">
                    <thead className="table-head">
                        <tr>
                            <th scope="col">Nombre de constante</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor por defecto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-constante">direccion</td>
                            <td className="text-muted">array</td>
                            <td>Define la ruta y URL amigable de las vistas de que se creen dentro del proyecto.</td>
                            <td className="text-valor">'home' =&gt; 'view/home',<br/>
                                                    'login' =&gt; 'view/login/login',<br/>
                                                    'registro' =&gt; 'view/login/registro',"</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <h2>Creación de vistas con URL amigables</h2>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <p className="lead">Para crear una vista con URL amigable y que se muestre de manera correcta es necesario crear 
                                la vista dentro de la carpeta <b><i>view</i></b>, luego agregar dentro del array <b><i>direccion</i></b> el nombre de la vista como llave (key) 
                                y la ruta de la vista como contenido de esa llave.</p>
                <p className="lead">En el siguiente ejemplo se muestra la creación de una vista llamada <b><i>catalogo.</i></b></p>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <div>
                    <pre className="chroma p-3 mx-2 rounded">
                        <code>
                            <span className="o">&lt;?</span><span className="o">php</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s2">&#34;direccion&#34;</span><span className="p">,</span> <span className="k">array</span><span className="p">(</span><br/>
                            <span className="s1 ps-5">&#39;home&#39;</span> <span className="o">=&gt;</span> <span className="s1">&#39;view/home&#39;</span><span className="p">,</span><br/>
                            <span className="s1 ps-5">&#39;login&#39;</span> <span className="o">=&gt;</span> <span className="s1">&#39;view/login/login&#39;</span><span className="p">,</span><br/>
                            <span className="s1 ps-5">&#39;registro&#39;</span> <span className="o">=&gt;</span> <span className="s1">&#39;view/login/registro&#39;</span><span className="p">,</span><br/>
                            <span className="s1 ps-5">&#39;catalogo&#39;</span> <span className="o">=&gt;</span> <span className="s1">&#39;view/catalogo&#39;</span><span className="p">,</span><br/>
                            <span className="p ps-4">));</span>
                            <span className="o">?&gt;</span><span className="err"></span>
                        </code>
                    </pre>
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <h2>Ejemplo de archivo config completo</h2>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <div>
                    <pre className="chroma p-3 mx-2 rounded">
                        <code>
                            <span className="o">&lt;?</span><span className="o">php</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s1">&#39;NOMBRE_SERVIDOR&#39;</span><span className="p">,</span> <span className="s2">&#34;localhost&#34;</span><span className="p">);</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s1">&#39;NOMBRE_BD&#39;</span><span className="p">,</span> <span className="s2">&#34;test&#34;</span><span className="p">);</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s1">&#39;NOMBRE_USUARIO&#39;</span><span className="p">,</span> <span className="s2">&#34;root&#34;</span><span className="p">);</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s1">&#39;PASSWORD&#39;</span><span className="p">,</span> <span className="s2">&#34;&#34;</span><span className="p">);</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s1">&#39;TITULO_PAGINA&#39;</span><span className="p">,</span> <span className="s2">&#34;Project&#34;</span><span className="p">);</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s1">&#39;SERVIDOR&#39;</span><span className="p">,</span> <span className="s2">&#34;http://localhost/project/&#34;</span><span className="p">);</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s1">&#39;DEP_CSS&#39;</span><span className="p">,</span> <span className="nx">SERVIDOR</span> <span className="o">.</span> <span className="s2">&#34;public/css/&#34;</span><span className="p">);</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s1">&#39;DEP_SCRIPT&#39;</span><span className="p">,</span> <span className="nx">SERVIDOR</span> <span className="o">.</span> <span className="s2">&#34;public/js/&#34;</span><span className="p">);</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s1">&#39;DEP_IMG&#39;</span><span className="p">,</span> <span className="nx">SERVIDOR</span> <span className="o">.</span> <span className="s2">&#34;public/img/&#34;</span><span className="p">);</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s1">&#39;CONTROLLER&#39;</span><span className="p">,</span> <span className="nx">SERVIDOR</span> <span className="o">.</span> <span className="s2">&#34;controller/&#34;</span><span className="p">);</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s1">&#39;AUDIO&#39;</span><span className="p">,</span> <span className="nx">SERVIDOR</span> <span className="o">.</span> <span className="s2">&#34;public/files/audio/&#34;</span><span className="p">);</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s1">&#39;DOC&#39;</span><span className="p">,</span> <span className="nx">SERVIDOR</span> <span className="o">.</span> <span className="s2">&#34;public/files/doc/&#34;</span><span className="p">);</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s1">&#39;PDF&#39;</span><span className="p">,</span> <span className="nx">SERVIDOR</span> <span className="o">.</span> <span className="s2">&#34;public/files/pdf/&#34;</span><span className="p">);</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s1">&#39;VIDEO&#39;</span><span className="p">,</span> <span className="nx">SERVIDOR</span> <span className="o">.</span> <span className="s2">&#34;public/files/video/&#34;</span><span className="p">);</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s1">&#39;EXCEL&#39;</span><span className="p">,</span> <span className="nx">SERVIDOR</span> <span className="o">.</span> <span className="s2">&#34;public/files/xlsx/&#34;</span><span className="p">);</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s1">&#39;error&#39;</span><span className="p">,</span> <span className="s2">&#34;view/404&#34;</span><span className="p">);</span><br/>
                            <span className="nx ps-4">define</span><span className="p">(</span><span className="s2">&#34;direccion&#34;</span><span className="p">,</span> <span className="k">array</span><span className="p">(</span><br/>
                            <span className="s1 ps-5">&#39;home&#39;</span> <span className="o">=&gt;</span> <span className="s1">&#39;view/home&#39;</span><span className="p">,</span><br/>
                            <span className="s1 ps-5">&#39;login&#39;</span> <span className="o">=&gt;</span> <span className="s1">&#39;view/login/login&#39;</span><span className="p">,</span><br/>
                            <span className="s1 ps-5">&#39;registro&#39;</span> <span className="o">=&gt;</span> <span className="s1">&#39;view/login/registro&#39;</span><span className="p">,</span><br/>
                            <span className="p ps-4">));</span><br/>
                            <span className="o">?&gt;</span><br/>
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    </div>
    );
};