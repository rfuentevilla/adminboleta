import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoPago'
})
export class TipoPagoPipe implements PipeTransform {

  transform(value: number): string {

    let formaPago = '';

    switch (value) {
      case 1:
        formaPago = 'EFECTIVO';
        break;

      case 2:
        formaPago = 'CHEQUE';
        break;

      case 3:
        formaPago = 'TRANSFERENCIA';
        break;

      default:
        formaPago = '';
        break;
    }

    return formaPago;
  }


}
