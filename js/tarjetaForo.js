import { urlImagen } from "./state.js";
import { enviarComentario } from "./enviarComentario.js";
import { eliminarForo } from "./eliminarForo.js";


export function tarjetaForo(id, 
    nombre, 
    apellido, 
    titulo, 
    descripcion, 
    imagen, 
    fechaPublicacion,
    foros){
    // Crear elementos 
    let tarjetaForo = document.createElement('div');
    let formTarjetaForo = document.createElement('form');
    let contentButtonEliminar = document.createElement('div');
    let buttonEliminar = document.createElement('i');
    let contentPublicacion = document.createElement('div');
    let pPublicacion = document.createElement('p');
    let contentFechaPublicacion = document.createElement('div');
    let pFechaPublicacion = document.createElement('p');
    let contentTitulo = document.createElement('div');
    let pTitulo = document.createElement('p');
    let contentDescripcion = document.createElement('div');
    let pDescripcion = document.createElement('p');
    let contentImagen = document.createElement('div');
    let imgImagen = document.createElement('img');
    let contentTextareaComentario = document.createElement('div');
    let textareaComentario = document.createElement('textarea');
    let contentButtonComentario = document.createElement('div');
    let buttonComentario = document.createElement('button');
    let contentComentarios = document.createElement('div');

    // Definir clase y id para cada elemento
    tarjetaForo.classList.add('tarjeta-foro');
    tarjetaForo.setAttribute('id', `tarjeta-foro-${id}`);
    formTarjetaForo.classList.add('form-tarjeta-foro');
    contentButtonEliminar.classList.add('content-button-eliminar');
    buttonEliminar.setAttribute('id', 'button-eliminar');
    contentPublicacion.classList.add('content-publicacion');
    contentFechaPublicacion.classList.add('content-fecha-publicacion');
    contentTitulo.classList.add('content-titulo');
    contentDescripcion.classList.add('content-descripcion');
    contentImagen.classList.add('content-imagen')
    contentTextareaComentario.classList.add('content-textarea-comentario');
    contentButtonComentario.classList.add('content-button-comentario')
    buttonComentario.setAttribute('id', 'button-comentario');
    contentComentarios.classList.add('content-comentarios');
    contentComentarios.setAttribute('id', `content-comentarios-${id}`)

    // Agregar propiedades y valores
    buttonEliminar.setAttribute('class', 'bx bx-x-circle');
    pPublicacion.textContent = `Publicado por ${nombre} ${apellido}`;
    pFechaPublicacion.textContent = `${fechaPublicacion}`;
    pTitulo.textContent = titulo;
    pDescripcion.textContent = descripcion;
    if(urlImagen){
        imgImagen.setAttribute('src', urlImagen);
    }
    textareaComentario.setAttribute('placeholder', 'Comenta a esta publicacion');
    textareaComentario.setAttribute('maxlength', '400');
    textareaComentario.setAttribute('id', `textarea-comentario-${id}`);
    buttonComentario.setAttribute('type', 'submit');
    buttonComentario.textContent = 'Comentar';


    //--Eventos--
    // Llamar a enviarComentario cuando el formulario sea enviad (submit)
    formTarjetaForo.addEventListener('submit', function(event){
        enviarComentario(event, id, foros);
    });
    // Llamar a eliminarForo cuando haga click en buttonEliminar
    buttonEliminar.addEventListener('click', () => eliminarForo(id,foros));


    // Estilo elementos
    tarjetaForo.setAttribute('style', 
        `width: 350px;
        min-height: min-content;
        max-height: auto;
        margin : 20px;
        `
    )
    formTarjetaForo.setAttribute('style',
        `display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        flex: 0 0 100%;
        box-sizing: border-box;
        min-height: 100%;
        max-height: 100%;
        border-radius: 5px 7px 6px 5px;
        padding: 25px;
        background: var(--background-tarjeta-foro);
        `
    )
    contentButtonEliminar.setAttribute('style', 
        `display: flex;
        align-items: center;
        flex: 0 0 100%;
        min-height: auto;
        `
    )
    buttonEliminar.setAttribute('style', 
        `padding: 5px;
        border-radius: 50px;
        cursor: pointer;
        `
    )
    contentPublicacion.setAttribute('style', 
        `display: flex;
        flex: 0 0 100%;
        min-height: auto;
        max-height: max-content`
    )
    pPublicacion.setAttribute('style', 
        `width: 100%;
        text-align: right;
        font-size: 0.7em;
        color: var(--color-primario);`
    )
    contentFechaPublicacion.setAttribute('style',
        `display: flex;
        flex: 0 0 100%;
        min-height: auto;`
    )
    pFechaPublicacion.setAttribute('style',
        `width: 100%;
        text-align: right;
        font-size: 0.7em;
        color: var(--color-primario);`
    )
    contentTitulo.setAttribute('style',
        `display: flex;
        flex: 0 0 100%;
        min-height: auto;
        padding: 0 0 10px 0`
    )
    pTitulo.setAttribute('style',
        `font-size: 1.7em;
        font-weight: 500`
    )
    contentDescripcion.setAttribute('style',
        `display: flex;
        flex: 0 0 100%;
        min-height: auto;
        padding: 5px 0`
    )
    pDescripcion.setAttribute('style',
        `font-size: 1em;
        color: var(--color-primario);`
    )
    contentImagen.setAttribute('style',
        `display: flex;
        flex: 0 0 100%;
        min-heigth: auto;
        padding: 10px 0 5px 0`
    )
    imgImagen.setAttribute('style',
        `width: 100%;
        heigth: 70px;
        border-radius: 10px`
        
    )
    contentTextareaComentario.setAttribute('style',
        `display: flex;
        flex: 0 0 100%;
        min-height: auto;
        padding: 15px 0 0 0`
    )
    textareaComentario.setAttribute('style',
        `min-height: 100px;
        width: 100%;
        outline: none;
        border: var(--border-principal);
        white-space: pre-wrap;
        resize: none;
        overflow: hidden;
        border-radius: 8px 8px 0 0;
        padding: 5px 0 0 10px;
        font-size: 0.9em;
        background: var(--background-textarea-comentario);
        color: var(--color-primario);`
    )
    contentButtonComentario.setAttribute('style',
        `display: flex;
        flex: 0 0 100%;
        min-height: auto;
        padding: 0 0 15px 0`
    )
    buttonComentario.setAttribute('style', 
        `height: 30px;
        width: 100%;
        border-radius: 0 0 8px 8px;
        border: var(--border-principal);
        background: var(--background-button-secundario);
        padding: 0 5px;
        `
    )
    contentComentarios.setAttribute('style',
        `display: flex;
        flex-wrap: wrap;
        flex: 0 0 100%;
        min-height: auto;
        max-height: 200px;
        overflow-y: scroll;`
    )

    // Juntar los elementos
    contentButtonComentario.appendChild(buttonComentario);
    contentTextareaComentario.appendChild(textareaComentario);
    contentImagen.appendChild(imgImagen);
    contentDescripcion.appendChild(pDescripcion);
    contentTitulo.appendChild(pTitulo);
    contentFechaPublicacion.appendChild(pFechaPublicacion);
    contentPublicacion.appendChild(pPublicacion);
    contentButtonEliminar.appendChild(buttonEliminar);

    formTarjetaForo.appendChild(contentButtonEliminar);
    formTarjetaForo.appendChild(contentPublicacion);
    formTarjetaForo.appendChild(contentFechaPublicacion);
    formTarjetaForo.appendChild(contentTitulo);
    formTarjetaForo.appendChild(contentDescripcion);
    if(urlImagen){
        formTarjetaForo.appendChild(contentImagen);
    }
    formTarjetaForo.appendChild(contentTextareaComentario);
    formTarjetaForo.appendChild(contentButtonComentario);
    formTarjetaForo.appendChild(contentComentarios);


    tarjetaForo.appendChild(formTarjetaForo);

    return tarjetaForo;

}
