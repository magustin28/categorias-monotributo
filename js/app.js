
const articlePorCategoria = document.createElement('article');
articlePorCategoria.id = "detallePorCategoria";
articlePorCategoria.classList.add('my-3', 'container-fluid');


consultaPorCategoria.addEventListener('click', async function () {

    mainCategorias.appendChild(articlePorCategoria);
    detallePorCategoria.innerHTML = ``;

    await consultarCategorias()

    console.log(categoriasMT);

    if (errorConsulta) {
        detallePorCategoria.innerHTML = `Lo sentimos, no pudimos acceder a los productos disponible. Por favor, recargue la página o consulte mas tarde.`;

    } else {

        detallePorCategoria.innerHTML = `

        <div class="row d-flex align-items-center gap-3">
            <p class="col-12 col-md-5 text-center mb-0">¿Que actividad realiza?</p>
            <select class="col- col-md-3" id="actividad">
                <option></option>
                <option>Ventas</option>
                <option>Servicios</option>
            </select>
        </div> 
        <div class="row d-flex justify-content-center justify-content-md-start align-items-center gap-3">
            <p class="col-12 col-md-5 text-center mb-0">Categoria</p>
            <select class="col- col-md-3" id="categoriaSeleccionada"></select>
            <button class="col-5 col-md-2 btn btn-success" id="consultarCat">Consultar</button>
        </div>        
        `;
    }

    const actividad = document.querySelector('#actividad');
    const categoriaSeleccionada = document.querySelector('#categoriaSeleccionada');
    const consultarCat = document.querySelector('#consultarCat');

    categoriasVenta = categoriasMT.filter((categoria) => categoria.categoria <= 'K');
    categoriasServicio = categoriasMT.filter((categoria) => categoria.categoria <= 'H');


    actividad.addEventListener('change', function () {

        categoriaSeleccionada.innerHTML = `<option></option>`;

        selectorFiltro(actividad.value).forEach((categoria) => {
            categoriaSeleccionada.innerHTML += `
            <option>${categoria.categoria}</option>
            `;
        });
    });

    const divConsultaCategoria = document.createElement('div');
    divConsultaCategoria.id = "resultadoConsultaPorCategoria";

    consultarCat.addEventListener('click', function () {
        detallePorCategoria.appendChild(divConsultaCategoria);


        console.log(buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).categoria);

        resultadoConsultaPorCategoria.innerHTML = `

        <p class="mb-0">Detalle de la Categoria</p>
        <p class="mb-0">Categoria: ${buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).categoria}</p>
        <p class="mb-0">Ingresos Brutos Anuales: ${formatoPesos(buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).ingresosbutosanuales)}</p>
        <p class="mb-0">Ingresos Brutos Mensuales: ${formatoPesos(buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).ingresosBrutosMesuales())}</p>
        <p class="mb-0">Ingresos Brutos Diarios: ${formatoPesos(buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).ingresosBrutosDiarios())}</p>
        <p class="mb-0">Sup. Afectada: ${buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).superficieafectada}</p>
        <p class="mb-0">Energía Eléctrica Consumida Anualmente: ${buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).energiaelectrica}</p>
        <p class="mb-0">Alquileres Devengados Anualmente: ${formatoPesos(buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).alquilerdevanual)}</p>
        <p class="mb-0">Alquileres Devengados Mensual: ${formatoPesos(buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).alquilerDevMensual())}</p>
        ${actividad.value == 'Ventas' ? `<p class="mb-0">Precio Máximo Unitario de Vta: ${formatoPesos(buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).preciomaxunitario)}</p>` : ''}
        ${actividad.value == 'Ventas' ? `<p class="mb-0">Impuesto Integrado: ${formatoPesos(buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).impuestointegradoventa)}</p>` : `<p class="mb-0">Impuesto Integrado: ${formatoPesos(buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).impuestointegradoservicio)}</p>`}
        <p class="mb-0">Detalle del pago mensual</p>
        <p class="mb-0">Aportes al SIPA: ${formatoPesos(buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).aportesipa)}</p>
        <p class="mb-0">Aportes Obra Social: ${formatoPesos(buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).aporteos)}</p>
        <p class="mb-0">IIBB: ${formatoPesos(buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).iibbcba)}</p>
        <p class="mb-0">Munc. de Córdoba: ${formatoPesos(buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).muncpcba)}</p>
        <p class="mb-0">Total a pagar por mes: ${formatoPesos(buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).totalPorMes(actividad.value == 'Venta' ? buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).impuestointegradoventa : buscarArraysPorCategoria(selectorFiltro(actividad.value),categoriaSeleccionada.value).impuestointegradoservicio))}</p>
        `;
    });
});