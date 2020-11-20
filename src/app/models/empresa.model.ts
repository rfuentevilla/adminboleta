export class Empresa {

    constructor(
        // tslint:disable-next-line:variable-name
        public iD_EMPRESA: string,
        public rutEmpresa: string,
        public rutRepresentante: string,
        public rznSocial: string,
        public direccion: string,
        public giro: string,
        public email: string,
        public fono: string,
        public password: string,
        public pyme: number,
        public estado: number = 1,
        public actPassword: boolean = false,
        public region?: string,
        public ciudad?: string,
        public comuna?: string,
        public role?: string,
        public img?: string
    ) {}

}
