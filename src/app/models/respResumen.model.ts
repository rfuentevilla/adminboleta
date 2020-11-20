

export class RespResumenSII {
    constructor(
        public dcvCodigo: number,
        public rsmnCodigo: number,
        public rsmnTipoDocInteger: number,
        public dcvNombreTipoDoc: string,
        public dcvTipoIngresoDoc: string,
        public rsmnLink: boolean,
        public rsmnMntExe: number,
        public rsmnMntNeto: number,
        public rsmnMntIva: number,
        public rsmnMntIvaNoRec: number,
        public rsmnIvaUsoComun: number,
        public dcvOperacion: string,
        public rsmnMntTotal: number,
        public rsmnEstadoContab: string,
        public rsmnTotDoc: number,
        public smnTotalRutEmiso: string
    ) {}
}

export class RespDetalleSII {
    constructor(
        public dhdrCodigo: string,
        public dcvCodigo: string,
        public dcvEstadoContab: string,
        public detCodigo: string,
        public detTipoDoc: string,
        public detRutDoc: string,
        public detDvDoc: string,
        public detRznSoc: string,
        public detNroDoc: number,
        public detFchDoc: Date,
        public detFecAcuse: Date,
        public detFecReclamado: Date,
        public detFecRecepcion: Date,
        public detMntExe: number,
        public detMntNeto: number,
        public detMntActFijo: number,
        public detMntIvaActFijo: number,
        public detMntIvaNoRec: number,
        public detMntCodNoRec: number,
        public detMntSinCredito: number,
        public detMntIva: number,
        public detMntTotal: number,
        public detTasaImp: string,
        public detAnulado: string,
        public detIvaRetTotal: number,
        public detIvaRetParcial: number,
        public detIvaNoRetenido: number,
        public detIvaPropio: number,
        public detIvaTerceros: number,
        public detIvaUsoComun: number,
        public detLiqRutEmisor: number,
        public detLiqDvEmisor: number,
        public detLiqValComNeto: number,
        public detLiqValComExe: number,
        public detLiqValComIva: number,
        public detIvaFueraPlazo: number,
        public detTipoDocRef: string,
        public detFolioDocRef: string,
        public detExpNumId: string,
        public detExpNacionalidad: string,
        public detCredEc: number,
        public detLey18211: number,
        public detDepEnvase: number,
        public detIndSinCosto: number,
        public detIndServicio: number,
        public detMntNoFact: number,
        public detMntPeriodo: number,
        public detPsjNac: string,
        public detPsjInt: string,
        public detNumInt: string,
        public detCdgSiiSucur: string,
        public detEmisorNota: number,
        public detTabPuros: number,
        public detTabCigarrillos: number,
        public detTabElaborado: number,
        public detImpVehiculo: number,
        public detTpoImp: string,
        public detTipoTransaccion: string,
        public detEventoReceptor: string,
        public detEventoReceptorLeyenda: string,
        public cambiarTipoTran: string,
        public detPcarga: string,
        public descTipoTransaccion: string,
        public totalDtoiMontoImp: number,
        public totalDinrMontoIvaNoR: string,
    ) {}
}