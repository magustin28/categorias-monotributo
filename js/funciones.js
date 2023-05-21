// Formato Dinero/Pesos
function formatoPesos(valor) {
    return valor.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
}

// Consulta Categorias
async function consultarCategorias() {

    await fetch('json/categoriasMT.json')
        .then(async (response) => {
            if (response.ok) {

                arraycategoriasMT = await response.json()

                categoriasMT = arraycategoriasMT.map(prop => new CategoriaMonotributo(
                    prop.id,
                    prop.categoria,
                    prop.ingresosbutosanuales,
                    prop.superficieafectada,
                    prop.energiaelectrica,
                    prop.alquilerdevanual,
                    prop.preciomaxunitario,
                    prop.impuestointegradoventa,
                    prop.impuestointegradoservicio,
                    prop.aportesipa,
                    prop.aporteos,
                    prop.iibbcba,
                    prop.muncpcba));

            } else {
                throw new Error('Error en la respuesta del servidor');
            }
        })
        .catch((error) => {
            errorConsulta = error;
        });
}

//Elgir filtro según la actividad
function selectorFiltro(actividad) {
    let arraySeleccionado;

    if (actividad == "0") {
        arraySeleccionado ;
    } else if (actividad == 'Ventas') {
        arraySeleccionado = categoriasVenta;
    } else{
        arraySeleccionado = categoriasServicio;
    }

    return arraySeleccionado;
}

//Buscar dentro de Objetos por Categoria
function buscarArraysPorCategoria(array, valor) {
    seleccion = array.find((objeto) => objeto.categoria == valor);
    return seleccion;
}
