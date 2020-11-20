
export interface DetallePagos {
    idPago: number;
    nroRecibo: number;
    fechaPago: Date;
    formaPago: number;
    listResumen: Resumen[];
}

export interface Resumen {
    folio: number;
    mntPago: number;
}
