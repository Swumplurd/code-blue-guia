import React from "react";
import "../ArchivoConfig/ArchivoConfig.css";

export const ArchivoControlUrl = () =>{
    let confi = "archivo_config";
    return (
        <div class="container mt-5 animate__animated animate__fadeIn">
        <div class="row">
            <div class="col mt-4">
                <h1 class="display-4">control_url.php</h1>
                <hr/>
                <p class="lead">Este archivo contiene las instrucciones necesarias para que las rutas amigables se lean correctamente y nos dirijan a la vista correspondiente.</p>
                <p class="lead">Primero se toma la URL y se verifica que no esté vacia mediante una condición <code>if</code>, la función <code>isset</code> y el método <code>GET</code>.</p>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col mt-2">
                <div>
                    <pre class="chroma p-3 mx-2 rounded">
                        <code>
                            <span class="o">&lt;?</span><span class="o">php</span><br/>
                            <span class="k ps-4">if</span><span class="p">(</span><span class="nx">isset</span><span class="p">(</span><span class="nv">$_GET</span><span class="p">[</span><span class="s1">&#39;view&#39;</span><span class="p">])){"{"}</span><br/><br/>
                            <span class="p ps-4">{"}"}</span><br/>
                            <span class="o">?&gt;</span><span class="err"></span>
                        </code>
                    </pre>
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col mt-2">
                <p class="lead">Luego de esto se divide la URL con la función <code>explode</code> cuando se encuentre una <b>/</b> y se guarda la url en un array.</p>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col mt-2">
                <div>
                    <pre class="chroma p-3 mx-2 rounded">
                        <code>
                            <span class="o">&lt;?</span><span class="o">php</span><br/>
                            <span class="k ps-4">if</span><span class="p">(</span><span class="nx">isset</span><span class="p">(</span><span class="nv">$_GET</span><span class="p">[</span><span class="s1">&#39;view&#39;</span><span class="p">])){"{"}</span><br/>
                            <span class="nv ps-5">$view</span> <span class="o">=</span> <span class="nx">explode</span><span class="p">(</span><span class="s2">&#34;/&#34;</span><span class="p">,</span> <span class="nv">$_GET</span><span class="p">[</span><span class="s1">&#39;view&#39;</span><span class="p">]);</span><br/>
                            <span class="p ps-4">{"}"}</span><br/>
                            <span class="o">?&gt;</span><span class="err"></span>
                        </code>
                    </pre>
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col mt-2">
                <p class="lead">Ahora con el uso de operadores ternarios se comprueba la longitud del arreglo, se verifica la existencia de una key en el array <b><i>direccion</i></b> <a href={confi}>(vease config.php)</a>, si la vista existe, la página se redirigirá hacia ella, de lo contrario se mostrará <b><i>error:404</i></b></p>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col mt-2">
                <div>
                    <pre class="chroma p-3 mx-2 rounded">
                        <code>
                            <span class="o">&lt;?</span><span class="o">php</span><br/>
                            <span class="k ps-4">if</span><span class="p">(</span><span class="nx">isset</span><span class="p">(</span><span class="nv">$_GET</span><span class="p">[</span><span class="s1">&#39;view&#39;</span><span class="p">])){"{"}</span><br/>
                            <span class="nv ps-5">$view</span> <span class="o">=</span> <span class="nx">explode</span><span class="p">(</span><span class="s2">&#34;/&#34;</span><span class="p">,</span> <span class="nv">$_GET</span><span class="p">[</span><span class="s1">&#39;view&#39;</span><span class="p">]);</span><br/>
                            <span class="nv ps-5">$url</span> <span class="o">=</span> <span class="nx">count</span><span class="p">(</span><span class="nv">$view</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">2</span> <span class="o">?</span> <span class="p">(</span><span class="nx">array_key_exists</span><span class="p">(</span><span class="nv">$view</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">direccion</span><span class="p">)</span> <span class="o">?</span> <span class="nx">direccion</span><span class="p">[</span><span class="nv">$view</span><span class="p">[</span><span class="mi">0</span><span class="p">]]</span> <span class="o">:</span> <span class="nx">error</span><span class="p">)</span> <span class="o">:</span> <span class="nx">error</span><span class="p">;</span><br/>
                            <span class="k ps-5">require_once</span> <span class="nv">$url</span> <span class="o">.</span> <span class="s1">&#39;.php&#39;</span><span class="p">;</span><br/>
                            <span class="p ps-4">{"}"}</span><br/>
                            <span class="o">?&gt;</span><span class="err"></span>
                        </code>
                    </pre>
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col mt-2">
                <p class="lead">Por último la condicion <code>else</code> nos redirige al <b><i>home</i></b> en caso de que la URL no contenga una vista específica y se asigna un título por defecto a la página en caso de que no se defina en la vista específica.</p>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col mt-2">
                <div>
                    <pre class="chroma p-3 mx-2 rounded">
                        <code>
                            <span class="o">&lt;?</span><span class="o">php</span><br/>
                            <span class="k ps-4">if</span><span class="p">(</span><span class="nx">isset</span><span class="p">(</span><span class="nv">$_GET</span><span class="p">[</span><span class="s1">&#39;view&#39;</span><span class="p">])){"{"}</span><br/>
                            <span class="nv ps-5">$view</span> <span class="o">=</span> <span class="nx">explode</span><span class="p">(</span><span class="s2">&#34;/&#34;</span><span class="p">,</span> <span class="nv">$_GET</span><span class="p">[</span><span class="s1">&#39;view&#39;</span><span class="p">]);</span><br/>
                            <span class="nv ps-5">$url</span> <span class="o">=</span> <span class="nx">count</span><span class="p">(</span><span class="nv">$view</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">2</span> <span class="o">?</span> <span class="p">(</span><span class="nx">array_key_exists</span><span class="p">(</span><span class="nv">$view</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">direccion</span><span class="p">)</span> <span class="o">?</span> <span class="nx">direccion</span><span class="p">[</span><span class="nv">$view</span><span class="p">[</span><span class="mi">0</span><span class="p">]]</span> <span class="o">:</span> <span class="nx">error</span><span class="p">)</span> <span class="o">:</span> <span class="nx">error</span><span class="p">;</span><br/>
                            <span class="k ps-5">require_once</span> <span class="nv">$url</span> <span class="o">.</span> <span class="s1">&#39;.php&#39;</span><span class="p">;</span><br/>
                            <span class="p ps-4">{"}"}</span><span class="k">else</span><span class="p">{"{"}</span><br/>
                            <span class="k ps-5">require_once</span> <span class="nx">direccion</span><span class="p">[</span><span class="s1">&#39;home&#39;</span><span class="p">]</span> <span class="o">.</span> <span class="s1">&#39;.php&#39;</span><span class="p">;</span><br/>
                            <span class="p ps-4">{"}"}</span><br/>
                            <span class="o">?&gt;</span><span class="err"></span><br/><br/>
                            <span class="p">&lt;</span><span class="nt">title</span><span class="p">&gt;</span><span class="o">&lt;?</span><span class="o">=</span> <span class="nv">$titulo</span> <span class="o">=</span> <span class="o">!</span><span class="nx">isset</span><span class="p">(</span><span class="nv">$title</span><span class="p">)</span> <span class="o">?</span> <span class="nx">TITULO_PAGINA</span> <span class="o">:</span> <span class="nv">$title</span><span class="p">;</span><span class="o">?&gt;</span><span class="p">&lt;/</span><span class="nt">title</span><span class="p">&gt;</span>
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    </div>
    );
};