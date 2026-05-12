import { obtenerIndice } from "./index.js";


export function eliminarForo(id, foros){
    // Obtener ubiciacion del foro a eliminar
    let i = obtenerIndice(id);
    
    // Eliminar en la lista el foro
    if(i || i>=0){
        delete foros[i];
    }else{
        return alert('No se encontro el indice');
    }
    
    // Obtener elemento html con id
    let tarjetaForo = document.getElementById(`tarjeta-foro-${id}`);

    if(tarjetaForo){
        // Eliminar en html tarjetaForo
        return tarjetaForo.remove();
    }
    
    
}
