import { tarjetaBlog } from "./tarjetaBlog.js";

export function cargarTarjetaBlog(diccionario, blogs){

    // Obtener el contenedor a agregar las tarjetas blogs
    let contentTarjetasBlogs = document.getElementById('content-tarjetas-blogs');

    // Renderizar tarjetaBlog
    return contentTarjetasBlogs.appendChild(tarjetaBlog(diccionario.id, 
        diccionario.nombre, 
        diccionario.apellido, 
        diccionario.titulo, 
        diccionario.descripcion, 
        diccionario.imagen, 
        diccionario.fecha_publicacion,
        blogs));
}
