import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

import Swal from 'sweetalert2';

import { SubirArchivoService } from '../subriArchivo/subir-archivo.service';

import { Empresa, Login } from '../../models/index.model';
import { EstadoEmpresa } from '../../interfaces/index.interface';
// import { EstadoEmpresa } from '../../interfaces/Empresa.intefaces';

import { URL_SERVICIOS } from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  empresa: Empresa;
  token: string;
  menu: any = [];

  constructor(
    public http: HttpClient,
    public router: Router,
    public subirArchivoService: SubirArchivoService
  ) {
    this.cargarStorade();
  }

  estaLogeado() {
    return ( this.token === null || this.token.length > 5 ) ? true : false;
  }

  cargarStorade() {
    if ( localStorage.getItem('token') ) {
      this.token = localStorage.getItem('token');
      this.empresa = JSON.parse(localStorage.getItem('usuario'));
      this.menu = JSON.parse( localStorage.getItem('menu') );
    } else {
      this.token = '';
      this.empresa = null;
      this.menu = [];
    }
  }

  logout() {
    this.token = '';
    this.empresa = null;
    this.menu = [];
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('id');
    localStorage.removeItem('menu');
    localStorage.removeItem('periodo');

    this.router.navigate(['/login']);
  }

  guardarStorage( id: string, token: string, empresa: Empresa, menu: any ) {

    localStorage.setItem('id', id );
    localStorage.setItem('token', token );
    localStorage.setItem('usuario', JSON.stringify(empresa));
    localStorage.setItem('menu', JSON.stringify(menu));

    this.empresa = empresa;
    this.token = token;
    this.menu = menu;

  }

  login(login: Login, recuerdame: boolean = false) {

    if ( recuerdame ) {
      localStorage.setItem('email', login.email );
    } else {
      localStorage.removeItem('email');
    }



    const url = `${ URL_SERVICIOS }login/ingresar`;

    return this.http.post( url, login ).pipe(
      map( (resp: any) => {
        this.guardarStorage(resp.empresaLogin.iD_EMPRESA, resp.token, resp.empresaLogin, resp.menu );
        return true;
      }),
      catchError(error => { throw error; })
    );


  }

  buscarLogo(tipo: string) {

    let img;

    if ( !this.empresa.img ) {
      img = 'no-img.png';
    } else {
      img = this.empresa.img;
    }

    const url = `${ URL_SERVICIOS }Imagen/ObtenerImagen/${ tipo }/${ img }`;

    return this.http.get(url);

    // return this.http.get(url, { responseType: 'blob' })
    //   .pipe(flatMap( (blob: any) => {
    //     return blob;
    //   }));

  }

  crearUsuario( empresa: Empresa ) {
    const httpOptions = this.retornaHeader();

    const url = `${ URL_SERVICIOS }Empresas/Crear`;
    return this.http.post( url, empresa, httpOptions );

  }

  actualizarEmpresa( empresa: Empresa ) {

    const httpOptions = this.retornaHeader();

    const url = `${ URL_SERVICIOS }Empresas/Actualizar`;
    return this.http.put( url, empresa, httpOptions )
        .pipe(map((resp: any) => {
          if ( this.empresa.iD_EMPRESA === resp.empresaLogin.iD_EMPRESA ) {
            this.guardarStorage(resp.empresaLogin.iD_EMPRESA, this.token, resp.empresaLogin, this.menu);
          }
        }),
        catchError(err => {
            throw err;
          })
        );
  }


  retornaHeader() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${ this.token }`
      })
    };
  }

  listarEmpresas() {

    const httpOptions = this.retornaHeader();

    const url = `${ URL_SERVICIOS }Empresas/ListarEmpresas`;

    return this.http.get(url, httpOptions );

  }

  ActivaDesactiva(accion: boolean, idEmpresa: string) {

    const httpOptions = this.retornaHeader();

    const estado: EstadoEmpresa = {
      idEmpresa,
      accion,
      password : ':)'
    };

    const url = `${ URL_SERVICIOS }Empresas/ActivaDesactiva`;
    return this.http.put( url, estado, httpOptions );


  }

  cambiarImagen( archivo: File, id: string, ruta: string ) {

    return this.subirArchivoService.subirArchivo( archivo, 'img', id, ruta )
      .then( (resp: any) => {
        // console.log(resp.empresaLogin.img);
        this.empresa.img = resp.empresaLogin.img;
        this.guardarStorage(id, this.token, this.empresa, this.menu);

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });

        Toast.fire({
          icon: 'success',
          title: 'Imagen Actualizada'
        });

      })
      .catch( resp => {
        Swal.fire({
          title: 'Error al actualizar la imagen.',
          text: resp.mensaje,
          confirmButtonText: 'Aceptar',
          allowOutsideClick: false,
          icon: 'error'
        });
      });

  }

  subirCertificado( archivo: File, password: string, id: string ) {
    return this.subirArchivoService.subirCertificado( archivo, password, id )
      .then( () => {
        // console.log(resp.empresaLogin.img);

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });

        Toast.fire({
          icon: 'success',
          title: 'Certificado ha sido subido'
        });

      })
      .catch( resp => {
        Swal.fire({
          title: 'Error al actualizar la imagen.',
          text: resp.mensaje,
          confirmButtonText: 'Aceptar',
          allowOutsideClick: false,
          icon: 'error'
        });
      });
  }

  cambiarPassword(password: string ) {

    const httpOptions = this.retornaHeader();

    const estado: EstadoEmpresa = {
      idEmpresa : this.empresa.iD_EMPRESA,
      accion : true,
      password
    };

    const url = `${ URL_SERVICIOS }Empresas/CambiarPassword`;
    return this.http.put( url, estado, httpOptions );

  }
}
