import { Injectable } from '@angular/core';

export interface Estados {
    idEstado: number;
    nombre: string;
}


const ESTADOS_DTE = [
    {
        idEstado: 0,
        nombre: 'IMPAGAS'
    },
    {
        idEstado: 1,
        nombre: 'PAGADAS'
    },
    {
        idEstado: 2,
        nombre: 'ANULADAS'
    }
];

@Injectable()
export class EstadosDTE {
    getEstadoDTE(): Estados[] {
        return ESTADOS_DTE;
    }
}
