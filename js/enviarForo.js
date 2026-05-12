import { obtenerFecha } from './index.js';
import { cargarTarjetaForo } from './cargarTarjetaForo.js';
import { nombreActual, apellidoActual, setUrlImagen, setImagenActual, urlImagen} from './state.js';


export function enviarForo(e, foros){
    e.preventDefault();

    // Obtenemos la informacion obtenida de textarea descripcion
    let valorTextareaDescripcion = document.getElementById('textarea-descripcion').value;
    let valorTextareaTitle = document.getElementById('textarea-title').value;
    let estadoImagen = document.getElementById('estado-imagen');

    // Confirmar que la descripcion tenga mas de 1 valor
    if(valorTextareaDescripcion.length < 1 || valorTextareaTitle.length < 1){
        return alert('Los campos estan vacios');
    }

    // Generar identificador unico
    const uuid = window.crypto.randomUUID();

    // Creamos un diccionario
    let dic = {
        'id': uuid,
        'nombre': nombreActual,
        'apellido': apellidoActual,
        'titulo': valorTextareaTitle,
        'descripcion': valorTextareaDescripcion,
        'fecha_publicacion': obtenerFecha(),
        'imagen': urlImagen,
        'comentarios': []
    };

    // Guardamos los datos del foro a la lista
    foros.push(dic);
    

    // Renderizar en html las tarjetas
    cargarTarjetaForo(dic, foros);

    // Vaciar el formulario
    document.getElementById('textarea-title').value = '';
    document.getElementById('textarea-descripcion').value = '';
    setUrlImagen(null);
    setImagenActual(null);
    estadoImagen.textContent = 'No hay imagen cargada';
    
    return;
}