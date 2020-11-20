import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'imagenPng'
})
export class ImagenPngPipe implements PipeTransform {

  constructor( private sanitizer: DomSanitizer ) {}

  transform(url: string): any {

    url = `data:image/png;base64, ${ url }`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }

}
