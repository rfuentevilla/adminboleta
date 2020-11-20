
export class ComprasDTE {

    constructor(
        public id: number,
        public estado: string,
        public fchEmision: Date,
        public fchRecepcion: Date,
        public folio: number,
        public mntTotal: number,
        public rut: string,
        public rznSocial: string,
        public tipoDTE: number,
        public eventoReceptor: string,
        public fchAcuse: Date,
        public leyendaReceptor: string,
        public nombreDTE: string,
        public xml: number
    ) {}
}
