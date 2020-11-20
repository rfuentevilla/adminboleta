
export class Talonarios {
    constructor(
        public idTalonario: number,
        public idCuenta: string,
        public nroTalonario: number,
        public inicio: number,
        public cantidad: number,
        public estado: number,
        public mntEmitido: number,
        public mntPagar: number,
        public listDetChequera: detalleTalonarioChq[],
        public disponible?: number
    ) {}
}


export class Cheques {
    constructor(
        public idCheque: number,
        public idTalonario: number,
        public idPago: number,
        public idCorriente: number,
        public nroCheque: string,
        public mntCheque: number,
        public fchEmision: Date,
        public fchVence: Date,
        public fchCobro: Date,
        public consolidado: number,
        public estado: number
    ) {}
}

// tslint:disable-next-line:class-name
export class detalleTalonarioChq {
    constructor(
        public idChq: number,
        public idTalonario: number,
        public nroCheque: number,
        public emitido: number
    ) {}
}
