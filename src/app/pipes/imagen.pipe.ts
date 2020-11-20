import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  constructor( private sanitizer: DomSanitizer ) {}

  transform(url: string): any {

    url = `data:image/jpeg;base64, ${ url }`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }

}
