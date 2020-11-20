import { Pipe, PipeTransform } from '@angular/core';
import { TipoDocumentoSII } from '../interfaces/index.interface';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'tipodte'
})
export class TipodtePipe implements PipeTransform {

  transform(value: string, listTipo: TipoDocumentoSII[]): string {

    from( listTipo ).pipe(
      filter( x => x.CodigoDoc === value )
    ).subscribe( resp => {
      console.log(resp.sigla);
      return resp.sigla;
    });

    return '';



  }

}
