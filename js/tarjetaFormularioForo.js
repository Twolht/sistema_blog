import { formularioPersonalEnviado } from './state.js';
import { enviarForo } from './enviarForo.js';
import { abrirInputImagen } from './index.js';
import { obtenerImagen } from './obtenerImagen.js';
import { urlImagen } from './state.js';

export function tarjetaFormularioForo(foros){
    if(formularioPersonalEnviado){
        // Crear elementos 
        let tarjetaFormularioForo = document.createElement('section');
        let contentTarjetasForos = document.createElement('section');
        let formFormularioForo = document.createElement('form');
        let contentTitle = document.createElement('div');
        let contentTextareaTitle = document.createElement('div');
        let contentTextareaDescripcion = document.createElement('div');
        let contentEstadoImagen = document.createElement('div');
        let contentIconImagen = document.createElement('div');
        let contentButtonSubmit = document.createElement('div');

        // Elementos hijos
        let pTitle = document.createElement('p');
        let textareaTitle = document.createElement('textarea');
        let textareaDescripcion = document.createElement('textarea');
        let estadoImagen = document.createElement('p');
        let iconImagen = document.createElement('i');
        let inputImagen = document.createElement('input');
        let buttonSubmit = document.createElement('button');

        // Definir clases a cada elemento
        tarjetaFormularioForo.classList.add('tarjeta-formulario-foro');
        contentTarjetasForos.classList.add('content-tarjetas-foros');
        contentTarjetasForos.setAttribute('id', 'content-tarjetas-foros');
        formFormularioForo.classList.add('form-formulario-foro');
        formFormularioForo.setAttribute('id','form-formulario-foro');
        contentTitle.classList.add('content-title');
        contentTextareaDescripcion.classList.add('content-textarea-descripcion');
        contentEstadoImagen.classList.add('content-estado-imagen');
        estadoImagen.setAttribute('id', 'estado-imagen');
        contentIconImagen.classList.add('content-icon-imagen');
        inputImagen.setAttribute('id', 'input-imagen');
        contentButtonSubmit.classList.add('content-button-submit');


        // Definir las propiedades de cada elemento
        pTitle.textContent = 'Aqui puedes empezar a crear un nuevo foro';
        textareaTitle.setAttribute('maxlength', '150');
        textareaTitle.setAttribute('placeholder', 'Ingrese el titulo');
        textareaTitle.setAttribute('id', 'textarea-title');
        textareaDescripcion.setAttribute('maxlength', '600');
        textareaDescripcion.setAttribute('rows', '2');
        textareaDescripcion.setAttribute('id', 'textarea-descripcion');
        textareaDescripcion.setAttribute('placeholder', 'Descripcion del foro');
        estadoImagen.textContent = urlImagen ? 'Imagen cargada' : 'No hay imagen cargada';
        iconImagen.setAttribute('id', 'icon-imagen');
        iconImagen.setAttribute('id', 'icon-img')
        iconImagen.setAttribute('class', 'bx bxs-file-image');
        inputImagen.setAttribute('type', 'file');
        inputImagen.setAttribute('accept', 'image/*');
        contentButtonSubmit.setAttribute('id', 'submit');
        buttonSubmit.setAttribute('type', 'submit');
        buttonSubmit.setAttribute('id', 'button-foro')
        buttonSubmit.textContent = 'Publicar foro';

        //--Eventos--
        // LLamar a enviarForo cuando publicar foro
        formFormularioForo.addEventListener('submit', function(event){
            enviarForo(event, foros);
        });

        // Llamar a abrirInputImagen cuando click en  icono
        iconImagen.addEventListener('click', abrirInputImagen);

        // LLamar a obtenerImagen cuando se haga el proceso input file
        inputImagen.addEventListener('change', obtenerImagen);

        // Estilo elementos (css)
        tarjetaFormularioForo.setAttribute('style', 
            `display: flex; 
            justify-content: center; 
            width: 100%;
            min-height: auto;
            padding: 20px 0`)

        contentTarjetasForos.setAttribute('style', 
            `display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
            min-height: auto;
            padding: 20px;
            `
        )
            
        
        formFormularioForo.setAttribute('style',
            `display: flex; 
            align-content: flex-start; 
            flex-wrap: wrap;
            flex: 0 0 400px; 
            min-height: auto;
            border-radius: 7px 12px 9px 8px;
            background: var(--background-form-formulario-foro);
            padding: 25px;`
        )

        contentTitle.setAttribute('style', 
            `display: flex;
            align-items: center;
            flex: 0 0 70%;
            minHeight: auto;
            padding: 10px 0;`
        )
        pTitle.setAttribute('style',
            `font-size: 1.7em;
            text-align: left;
            font-weight: 500;
            color: var(--color-title-principal);`
        )

        contentTextareaTitle.setAttribute('style', 
            `display: flex;
            flex: 0 0 100%;
            min-height: auto;
            padding: 5px 0;
            `)
        textareaTitle.setAttribute('style', 
            `width: 100%;
            min-height: 80px;
            white-space: pre-wrap;
            overflow: hidden;
            resize: none;
            outline: none;
            padding: 15px 15px 5px 15px;
            border-radius: 8px;
            font-size: 1em;
            background: var(--background-textarea-titulo);
            `
        )

        contentTextareaDescripcion.setAttribute('style', 
            `display: flex;
            flex: 0 0 100%;
            min-height: auto;
            padding: 5px 0 0 0;
            `)
        
        textareaDescripcion.setAttribute('style', 
            `width: 100%;
            min-height: 150px;
            resize: none;
            overflow-y: overflow;
            white-space: pre-wrap;
            outline: none;
            border-radius: 8px;
            padding: 15px 15px 5px 15px;
            font-size: 1em;
            background: var(--background-textarea-titulo);
            `
        )

        contentEstadoImagen.setAttribute('style', 
            `display: flex;
            min-height: auto;
            align-items: center;
            width: 50%;
            padding: 15px 0;`
        )
        estadoImagen.setAttribute('style', 
            `font-size: 0.7em;
            overflow-wrap: anywhere`
        )

        contentIconImagen.setAttribute('style',
            `display: flex;
            width: 15%;
            min-height: auto;
            padding: 15px 0;
            `
        )
        iconImagen.setAttribute('style', 
            `padding: 6px;
            width: 32px;
            height: 32px;
            font-size: 1.4em;
            border-radius: 50px;
            font-weight: 300;
            cursor: pointer;
            color: var(--color-primario);
            background: var(--background-icon);
            `)

        inputImagen.setAttribute('style',
            `display: none;`
        )

        contentButtonSubmit.setAttribute('style', 
            `display: flex;
            justify-content: flex-end;
            width: 35%;
            min-height: auto;
            padding: 15px 0;
            `
        )
        buttonSubmit.setAttribute('style', 
            `padding: 2px 0;
            width: 100%;
            height: 30px;
            font-size: 0.9em;
            border-radius: 12px;
            border: 1px solid #000000;
            cursor: pointer`
        )


        // Combinar estructuras
        contentButtonSubmit.appendChild(buttonSubmit);
        contentIconImagen.appendChild(iconImagen);
        contentEstadoImagen.appendChild(estadoImagen);
        contentTextareaDescripcion.appendChild(textareaDescripcion);
        contentTextareaTitle.appendChild(textareaTitle);
        contentTitle.appendChild(pTitle);

        formFormularioForo.appendChild(contentTitle);
        formFormularioForo.appendChild(contentTextareaTitle);
        formFormularioForo.appendChild(contentTextareaDescripcion);
        formFormularioForo.appendChild(contentEstadoImagen);
        formFormularioForo.appendChild(contentIconImagen);
        formFormularioForo.appendChild(inputImagen);
        formFormularioForo.appendChild(contentButtonSubmit);

        tarjetaFormularioForo.appendChild(formFormularioForo);

        app.appendChild(tarjetaFormularioForo);
        app.appendChild(contentTarjetasForos);

        return app;
    }else{
        return alert('Error en el formulario');
    }
}
