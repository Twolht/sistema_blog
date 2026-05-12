import { tarjetaFormularioBlog } from "./tarjetaFormularioBlog.js";
import { setFormularioPersonalEnviado, setApellidoActual, setNombreActual} from "./state.js";

// Elemento principal de renderizacion
let app = document.getElementById('app');
let blogs = [];

function pedirDatosFormulario(event){
    // Evitar que se recargue la pagina
    event.preventDefault();

    // Obtenemos el valor de los inputs
    let inputNombre = document.getElementById('input-nombre').value;
    let inputApellido = document.getElementById('input-apellido').value;

    // Confirmamos que el formulario no este vacio
    if(inputNombre === '' && inputApellido === ''){
        return alert('Los campos estan vacios');
    }
    
    // Confirmamos el envio de formulario
    setFormularioPersonalEnviado(true);

    // Agregamos los nombres de manera global
    setNombreActual(inputNombre);
    setApellidoActual(inputApellido);

    
    // Cerramos la tarjeta-formulario-datos
    let tarjetaFormulario = document.getElementById('tarjeta-formulario-datos');
    tarjetaFormulario.remove();

    tarjetaFormularioBlog(blogs);

    return;
}

export function obtenerIndice(id){
    // Obtener el indice de la lista mediante el identificador unico
    let listaIndice = blogs.map((blog, indice) => {if(id === blog.id){return indice}else{return null}});
    // Dejar solo un elemento en la lista
    let filtarLista = listaIndice.filter((lista) => lista !== null);
    // Obtenemos el indice definitivo
    let indice = filtarLista[0];

    return indice;
}

export function obtenerFecha(){
    // Calcular fecha y hora actual
    const fecha = new Date();
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    const hora = fecha.getHours();
    const minuto = fecha.getMinutes();
    const segundo = fecha.getSeconds();

    return `${dia}/${mes}/${anio} ${hora}:${minuto}:${segundo}`;
}

export function abrirInputImagen(){
    document.getElementById('input-imagen').click();
}

// Obtener elemento del formulario
let formDatos = document.getElementById('form-datos-personales');
// Llamar pedirDatosFormulario cuando el form-datos-personales haga submit
formDatos.addEventListener('submit', pedirDatosFormulario);

