import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor() { }

  subirArchivo( archivo: File, tipo: string, id: string, ruta: string = 'SubirImagen' ) {

    return new Promise( (resolve, reject) => {

      const formData = new FormData();
      const xhr = new XMLHttpRequest();

      formData.append('img', archivo, archivo.name);

      xhr.onreadystatechange = () => {

        if (xhr.readyState === 4 ) {

          if ( xhr.status === 200 ) {
            // console.log('Imagen subida');
            resolve( JSON.parse( xhr.response ));
          } else {
            // console.log('Fallo subida de la imagen');
            reject( JSON.parse( xhr.response ) );
          }

        }

      };

      const url = `${ URL_SERVICIOS }Upload/${ruta}/${ tipo }/${ id }`;

      xhr.open('PUT', url, true);
      xhr.send( formData );


    });

  }

  subirCertificado( archivo: File, password: string, id: string ) {

    return new Promise( (resolve, reject) => {

      const formData = new FormData();
      const xhr = new XMLHttpRequest();

      formData.append('certificado', archivo, archivo.name);

      xhr.onreadystatechange = () => {

        if (xhr.readyState === 4 ) {

          if ( xhr.status === 200 ) {
            // console.log('Imagen subida');
            resolve( JSON.parse( xhr.response ));
          } else {
            // console.log('Fallo subida de la imagen');
            reject( JSON.parse( xhr.response ) );
          }

        }

      };

      const url = `${ URL_SERVICIOS }Upload/SubirCertificado/${ id }/${ password }`;

      xhr.open('POST', url, true);
      xhr.send( formData );


    });

  }
}
