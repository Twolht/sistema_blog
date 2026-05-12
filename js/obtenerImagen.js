import { imagenActual, setUrlImagen, setImagenActual} from "./state.js";

export function obtenerImagen(event){
    // Obtener archivo
    let archivo = event.target.files[0];

    // Si no contiene archivo
    if(!archivo){
        return urlImagen = null;
    }

    // Guardar los valores de la imagen
    setImagenActual(archivo);

    // Crear un entorno url para la imagen
    let imagen = URL.createObjectURL(archivo);
    
    setUrlImagen(imagen)

    // Actualizar estado imagen del formulario
    let estadoImagen = document.getElementById('estado-imagen');
    estadoImagen.textContent = `Imagen cargada: ${imagenActual.name}`;

    return;
}

