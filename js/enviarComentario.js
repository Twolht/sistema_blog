import { obtenerIndice, obtenerFecha} from './index.js';
import { nombreActual, apellidoActual} from './state.js';
import { tarjetaComentario } from './tarjetaComentario.js';

export function enviarComentario(e, id, blogs){
    e.preventDefault();

    // Obtener valor textarea del comentario
    let textarea = document.getElementById(`textarea-comentario-${id}`).value;

    if(textarea.length < 1){
        return alert('Escribe algun comentario');
    }
    // Obtenemos el indice de la lista blog segun id
    let i = obtenerIndice(id);

    // Diccionario de persona quien comenta
    let dic = {
        'nombre': nombreActual,
        'apellido': apellidoActual,
        'comentario': textarea,
        'fecha_comentario': obtenerFecha()
    }
    // Agregar comentario a blogs
    if(i || i>=0){
        blogs[i].comentarios.push(dic);
    }else{
        return alert('No se puede agregar el comentario');
    }
    

    // Agregar tarjetaComentario
    let contentComentarios = document.getElementById(`content-comentarios-${id}`);
    contentComentarios.appendChild(tarjetaComentario(dic));

    // vaciar textarea
    document.getElementById(`textarea-comentario-${id}`).value = '';

    return;
}

