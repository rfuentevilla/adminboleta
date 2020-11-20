import { Cheques } from './cheques.model';


export class Corriente {
    constructor(
        public idCorriente: number,
        public rut: string,
        public idEmpresa: string,
        public rznSocial: string,
        public emailIntercambio: string,
        public emailComercial: string,
        public cliente: number,
        public proveedor: number,
        public fono: string,
        public giro: string,
        public direccion: string,
        public comuna: string,
        public ciudad: string,
        public estado: number,
        // tslint:disable-next-line:no-shadowed-variable
        public Cheques?: Cheques[]
    ) {}
}
