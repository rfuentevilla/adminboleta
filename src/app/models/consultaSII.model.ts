export class ConsultaSII {
    constructor(
        public idEmpresa: string,
        public mes: string,
        public anio: string
        // public tipoCompra: string,
        // public REGISTRO: string,
        // public codTipoDoc: number,
        // public resumen: boolean
    ) {}
}

export class ConsultaAceptaCompra {
    constructor(
        public idEmpresa: string,
        public idDocumento: string,
        public Accion: string,
        public SoapAccion: string
    ) {}
}