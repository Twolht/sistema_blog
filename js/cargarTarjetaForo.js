import { tarjetaForo } from "./tarjetaForo.js";

export function cargarTarjetaForo(diccionario, foros){

    // Obtener el contenedor a agregar las tarjetas foros
    let contentTarjetasForos = document.getElementById('content-tarjetas-foros');

    // Renderizar tarjetaForo
    return contentTarjetasForos.appendChild(tarjetaForo(diccionario.id, 
        diccionario.nombre, 
        diccionario.apellido, 
        diccionario.titulo, 
        diccionario.descripcion, 
        diccionario.imagen, 
        diccionario.fecha_publicacion,
        foros));
}
