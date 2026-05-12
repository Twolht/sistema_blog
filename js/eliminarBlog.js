import { obtenerIndice } from "./index.js";


export function eliminarBlog(id, blogs){
    // Obtener ubiciacion del blog a eliminar
    let i = obtenerIndice(id);
    
    // Eliminar en la lista el blog
    if(i || i>=0){
        delete blogs[i];
    }else{
        return alert('No se encontro el indice');
    }
    
    // Obtener elemento html con id
    let tarjetaBlog = document.getElementById(`tarjeta-blog-${id}`);

    if(tarjetaBlog){
        // Eliminar en html tarjetaBlog
        return tarjetaBlog.remove();
    }
    
    
}
