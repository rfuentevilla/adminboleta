import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'fchAcuse'
})
export class FchAcusePipe implements PipeTransform {

  transform(value: string): string {

    let fchacuse = '';

    if ( value !== '1900-01-01T00:00:00' ) {
      const d = new Date(value);
      fchacuse = moment(d).format('DD-MM-YYYY, h:mm:ss');
      // console.log('fecha Acuse', fchacuse);
    }


    return fchacuse;
  }

}
