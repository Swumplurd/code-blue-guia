import React from "react";
import "../ArchivoConfig/ArchivoConfig.css";

export const ArchivoDependencias = () =>{
    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
        <div className="row">
            <div className="col mt-4">
                <h1 className="display-4">dependencias.php</h1>
                <hr/>
                <p className="lead">Este archivo contiene las rutas de las dependencias necesarias para el proyecto usando las constantes creadas en el archivo <b><i>config.php.</i></b> Dentro de este archivo se agregan todas las dependencias que se utilicen de manera global.</p>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <h2>Imágenes y CSS</h2>
                <p className="lead">Para añadir dependencias de CSS, iconos e imágenes, basta con agregar la etiqueta <code>&lt;link&gt;</code> con la constante <b><i>DEP_IMG</i></b> o <b><i>DEP_CSS</i></b> según sea el caso, y luego el nombre de archivo y ruta específica (si la tiene).</p>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <div>
                    <pre className="chroma p-3 mx-2 rounded">
                        <code>
                            <span className="p">&lt;</span><span className="nt">link</span> <span className="na">rel</span><span className="o">=</span><span className="s">&#34;icon&#34;</span> <span className="na">type</span><span className="o">=</span><span className="s">&#34;image/ico&#34;</span> <span className="na">href</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_IMG;?&gt;favico.png&#34;</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">link</span> <span className="na">rel</span><span className="o">=</span><span className="s">&#34;stylesheet&#34;</span> <span className="na">href</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_CSS;?&gt;b4/bootstrap.css&#34;</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">link</span> <span className="na">rel</span><span className="o">=</span><span className="s">&#34;stylesheet&#34;</span> <span className="na">href</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_CSS;?&gt;main.css&#34;</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">link</span> <span className="na">rel</span><span className="o">=</span><span className="s">&#34;stylesheet&#34;</span> <span className="na">href</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_CSS;?&gt;dataTable/dataTables.bootstrap4.min.css&#34;</span><span className="p">&gt;</span>
                        </code>
                    </pre>
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <h2>Scripts</h2>
                <p className="lead">Para añadir dependecias generales de JavaScript y controladores de manera global se debe agregar la etiqueta <code>&lt;script&gt;</code> con la constante <b><i>DEP_SCRIPT</i></b> o <b><i>CONTROLLER</i></b>, según sea el caso, y luego el nombre del archivo y ruta específica (si la tiene).</p>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <div>
                    <pre className="chroma p-3 mx-2 rounded">
                        <code>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_SCRIPT;?&gt;font_awesome/all.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_SCRIPT;?&gt;swal/swal.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_SCRIPT;?&gt;jquery/jquery.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_SCRIPT;?&gt;poper/popper.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_SCRIPT;?&gt;b4/bootstrap.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_SCRIPT;?&gt;dataTable/jquery.dataTables.min.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_SCRIPT;?&gt;dataTable/dataTables.bootstrap4.min.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_SCRIPT;?&gt;plotly/plotly.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=CONTROLLER;?&gt;funciones_sesion.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span>
                        </code>
                    </pre>
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <h2>Ejemplo de archivo dependencias completo</h2>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col mt-2">
                <div>
                    <pre className="chroma p-3 mx-2 rounded">
                        <code>
                            <span className="p">&lt;</span><span className="nt">link</span> <span className="na">rel</span><span className="o">=</span><span className="s">&#34;icon&#34;</span> <span className="na">type</span><span className="o">=</span><span className="s">&#34;image/ico&#34;</span> <span className="na">href</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_IMG;?&gt;favico.png&#34;</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">link</span> <span className="na">rel</span><span className="o">=</span><span className="s">&#34;stylesheet&#34;</span> <span className="na">href</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_CSS;?&gt;b4/bootstrap.css&#34;</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">link</span> <span className="na">rel</span><span className="o">=</span><span className="s">&#34;stylesheet&#34;</span> <span className="na">href</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_CSS;?&gt;main.css&#34;</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">link</span> <span className="na">rel</span><span className="o">=</span><span className="s">&#34;stylesheet&#34;</span> <span className="na">href</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_CSS;?&gt;dataTable/dataTables.bootstrap4.min.css&#34;</span><span className="p">&gt;</span><br/><br/>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_SCRIPT;?&gt;font_awesome/all.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_SCRIPT;?&gt;swal/swal.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_SCRIPT;?&gt;jquery/jquery.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_SCRIPT;?&gt;poper/popper.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_SCRIPT;?&gt;b4/bootstrap.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_SCRIPT;?&gt;dataTable/jquery.dataTables.min.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_SCRIPT;?&gt;dataTable/dataTables.bootstrap4.min.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=DEP_SCRIPT;?&gt;plotly/plotly.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span><br/>
                            <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;&lt;?=CONTROLLER;?&gt;funciones_sesion.js&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span>
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    </div>
    );
};