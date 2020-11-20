import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valornulo'
})
export class ValornuloPipe implements PipeTransform {

  transform(value: any, valor: string ): string {

    if ( value === null ) {
      return ' ';
    }


    let retorno = null;

    switch (valor) {
      case 'rznSocial':
        retorno = value.rznSocial;
        break;

      case 'rut':
        retorno = `${ value.rut }  ${ value.rznSocial }` ;
        break;

      default:
        retorno = '';
        break;
    }

    return retorno;
  }

}
