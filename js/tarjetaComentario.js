export function tarjetaComentario(dic){
    // Crear elementos 
    let tarjetaComentario = document.createElement('div');
    let tarjeta = document.createElement('div');
    let contentComentado = document.createElement('div');
    let pComentado = document.createElement('p');
    let contentComentario = document.createElement('div');
    let pComentario = document.createElement('p');
    let contentFechaComentario = document.createElement('div');
    let pFechaComentario  = document.createElement('p');


    // Definir clases elementos
    tarjetaComentario.classList.add('tarjeta-comentario');
    tarjeta.classList.add('tarjeta');
    contentComentado.classList.add('content-comentado');
    contentComentario.classList.add('content-comentario');
    contentFechaComentario.classList.add('content-fecha-comentario');

    // Propiedades de elementos
    pComentado.textContent = `Comentado por ${dic.nombre} ${dic.apellido}`;
    pComentario.textContent = dic.comentario;
    pFechaComentario.textContent = dic.fecha_comentario;

    // Estilo
    tarjetaComentario.setAttribute('style',
        `min-height: auto;
        max-height: 80px;
        width: 100%;
        margin: 10px 0
        `
    )
    tarjeta.setAttribute('style',
        `display: flex;
        flex-wrap: wrap;
        flex: 0 0 100%;
        heigth: 100%;
        border-radius: 11px;
        background: var(--background-tarjeta-comentario);
        padding: 15px;
        `
    )
    contentComentado.setAttribute('style',
        `display: flex;
        flex: 0 0 100%;
        height: auto;`
    )
    pComentado.setAttribute('style',
        `font-size: 0.7em;
        font-weight: 500;
        color: var(--color-primario);`
    )
    contentComentario.setAttribute('style',
        `display: flex;
        flex: 0 0 100%;
        min-height: auto;
        padding: 5px 0 10px 0;`
    )
    pComentario.setAttribute('style', 
        `font-size: 0.9em;
        color: var(--color-primario);`
    )
    contentFechaComentario.setAttribute('style',
        `display: flex;
        flex: 0 0 100%;
        min-height: auto;`
    )
    pFechaComentario.setAttribute('style',
        `width: 100%;
        text-align: right;
        font-size: 0.7em;
        color: var(--color-primario);`
    )

    // Combinar elementos
    contentFechaComentario.appendChild(pFechaComentario);
    contentComentario.appendChild(pComentario);
    contentComentado.appendChild(pComentado);

    tarjeta.appendChild(contentComentado);
    tarjeta.appendChild(contentComentario);
    tarjeta.appendChild(contentFechaComentario);

    tarjetaComentario.appendChild(tarjeta);

    return tarjetaComentario;

}
