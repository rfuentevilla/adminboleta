
export class CuentasBancos {

    constructor(
        public idCuenta: number,
        public idEmpresa: string,
        public idBanco: number,
        public nroCuenta: string,
        public nmbBanco: string,
        public tipoCuenta: number,
        public saldoInicial: number,
        public saldoContable: number,
        public saldoDisponible: number,
        public banco: Bancos

    ) {}
}

export class Bancos {
    constructor(
        public idBanco: number,
        public nombreBanco: number,
        public sbif: string
    ) {}
}

export class MovimientoCuenta {
    constructor(
        public idMovimiento: number,
        public idEmpresa: string,
        public idCuenta: number,
        public fchMovimiento: Date,
        public descripcion: string,
        public cargo: number,
        public abono: number,
        public consolidado: number,
        public fchConsolidado: Date,
        public fchAnulacion: Date
    ) {}
}
