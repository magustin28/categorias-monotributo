// Objeto Categorias Monotributo
class CategoriaMonotributo {

    constructor(id, categoria, ingresosbutosanuales, superficieafectada, energiaelectrica, alquilerdevanual, preciomaxunitario, impuestointegradoventa, impuestointegradoservicio, aportesipa, aporteos, iibbcba, muncpcba,) {
        
        this.id = id;
        this.categoria = categoria;
        this.ingresosbutosanuales = ingresosbutosanuales;
        this.superficieafectada = superficieafectada;
        this.energiaelectrica = energiaelectrica;
        this.alquilerdevanual = alquilerdevanual;
        this.preciomaxunitario = preciomaxunitario;
        this.impuestointegradoventa = impuestointegradoventa;
        this.impuestointegradoservicio = impuestointegradoservicio;
        this.aportesipa = aportesipa;
        this.aporteos = aporteos;
        this.iibbcba = iibbcba;
        this.muncpcba = muncpcba;
    }

    //Ingresos Brutos Mensuales
    ingresosBrutosMesuales = function () {
        let ingresosBrutosMesuales = this.ingresosbutosanuales / 12;
        return ingresosBrutosMesuales;
    }

    //Ingresos Brutos Diarios
    ingresosBrutosDiarios = function () {
        let ingresosBrutosDiarios = this.ingresosbutosanuales / 365;
        return ingresosBrutosDiarios;
    }

    //Alquileres Mensuales
    alquilerDevMensual = function () {
        let alquilerDevMensual = this.alquilerdevanual / 12;
        return alquilerDevMensual;
    }

    //A pagar por mes
    totalPorMes = function (impuestoIntegrado) {
        let totalPorMes = impuestoIntegrado + this.aportesipa + this.aporteos + this.iibbcba + this.muncpcba;
        return totalPorMes;
    }


}