
export interface DteDocumentos {
    seleccion: boolean;
    id: number;
    folio: number;
    fchEmision: Date;
    mntDocumento: number;
    abonoDocumento: number;
    saldoDocumento: number;
    mntPagar: number;
    highlighted?: boolean;
}

export interface ChequesDetalle {
    id: number;
    idTalonario: number;
    numero: number;
    vence: Date;
    monto: number;
    idCuenta: number;
}

export interface TransferenciaBanco {
    idCuenta: number;
    nroComprobante: string;
    monto: number;
    fecha: Date;
    bcoDestino: string;
    ctaDestino: string;
}
