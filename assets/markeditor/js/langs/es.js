(function(){
    var factory = function (exports) {
        var lang = {
            name : "es",
            description : "Editor Markdown Online Gratuito.",
            tocTitle    : "Índice",
            toolbar : {
                undo             : "Deshacer(Ctrl+Z)",
                redo             : "Rehacer(Ctrl+Y)",
                bold             : "Negrita",
                del              : "Tachado",
                italic           : "Itálico",
                quote            : "Bloque de citas",
                ucwords          : "Primera letra de palabras convertidas a mayúsculas",
                uppercase        : "Texto de selección convertido a mayúsculas",
                lowercase        : "Texto de selección convertido a minúsculas",
                h1               : "Título 1",
                h2               : "Título 2",
                h3               : "Título 3",
                h4               : "Título 4",
                h5               : "Título 5",
                h6               : "Título 6",
                "list-ul"        : "Lista desordenada",
                "list-ol"        : "Lista ordenada",
                hr               : "Linea horizontal",
                link             : "Link",
                "reference-link" : "Link de referencia",
                image            : "Imagen",
                code             : "Código incrustado",
                "preformatted-text" : "Bloque de código / texto con formato previo (sangría de tabulación)",
                "code-block"     : "Bloque de código (varios lenguajes)",
                table            : "Tablas",
                datetime         : "Fecha y hora",
                emoji            : "Emoji",
                "html-entities"  : "Entidades HTML",
                pagebreak        : "Salto de página",
                watch            : "Deshabilitar el renderizado en tiempo real",
                unwatch          : "Vista previa del contenido renderizado",
                preview          : "Ver HTML (Presione Shift + ESC para salir)",
                fullscreen       : "Pantalla completa (Presione ESC para salir)",
                clear            : "Limpiar",
                search           : "Buscar",
                help             : "Ayuda",
                info             : "Sobre "
            },
            buttons : {
                enter  : "Ok",
                cancel : "Cancelar",
                close  : "Cerrar"
            },
            dialog : {
                link : {
                    title    : "Link",
                    url      : "Dirección",
                    urlTitle : "Título",
                    urlEmpty : "Error: complete la dirección del enlace."
                },
                referenceLink : {
                    title    : "Link de referencia",
                    name     : "Nombre",
                    url      : "Dirección",
                    urlId    : "ID",
                    urlTitle : "Título",
                    nameEmpty: "Error: el nombre de la referencia no puede estar vacío.",
                    idEmpty  : "Error: complete el ID del enlace de referencia.",
                    urlEmpty : "Error: complete la dirección URL del enlace de referencia."
                },
                image : {
                    title    : "Imagen",
                    url      : "Dirección",
                    link     : "Link",
                    alt      : "Título",
                    uploadButton     : "Carga",
                    imageURLEmpty    : "Error: la dirección URL de la imagen no puede estar vacía.",
                    uploadFileEmpty  : "Error: la carga de la imagen no puede estar vacía.",
                    formatNotAllowed : "Error: solo permite cargar un archivo de imagen, formato de archivo de imagen permitido para cargar:"
                },
                preformattedText : {
                    title             : "Texto / códigos preformateados",
                    emptyAlert        : "Error: complete el texto o el contenido de los códigos formateados previamente.",
                    placeholder       : "codificación...."
                },
                codeBlock : {
                    title             : "Bloque de código",
                    selectLabel       : "Lenguajes: ",
                    selectDefaultText : "selecciona un lenguaje...",
                    otherLanguage     : "Otros lenguajes",
                    unselectedLanguageAlert : "Error: seleccione el idioma del código.",
                    codeEmptyAlert    : "Error: complete el contenido del código.",
                    placeholder       : "codificación...."
                },
                htmlEntities : {
                    title : "Entidades HTML"
                },
                help : {
                    title : "Ayuda"
                }
            }
        };

        exports.defaults.lang = lang;
    };

    // CommonJS/Node.js
    if (typeof require === "function" && typeof exports === "object" && typeof module === "object")
    {
        module.exports = factory;
    }
    else if (typeof define === "function")  // AMD/CMD/Sea.js
    {
        if (define.amd) { // for Require.js

            define(["editormd"], function(editormd) {
                factory(editormd);
            });

        } else { // for Sea.js
            define(function(require) {
                var editormd = require("../editormd");
                factory(editormd);
            });
        }
    }
    else
    {
        factory(window.editormd);
    }

})();