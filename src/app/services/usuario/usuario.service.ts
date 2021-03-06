import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';

import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor( private httpClient: HttpClient, private router: Router, private subirArchivo: SubirArchivoService ) {
    this.cargarStorage();
  }

  estaLogueado(){

    return ( this.token.length > 5 ) ? true : false;

  }

  cargarStorage(){
    if( localStorage.getItem('token') ){

      this.token = localStorage.getItem('token');

      this.usuario = JSON.parse( localStorage.getItem('usuario') );

    }else{

      this.token = '';

      this.usuario = null;

    }
  }

  crearUsuario( usuario: Usuario ){

    let url = URL_SERVICIOS+'/usuario';

    // return this.httpClient.post( url, usuario )
    //   .map( (resp:any) => {

    //     swal('Usuario creado',usuario.email,'success');

    //     return resp.usuario;

    //   });

    return this.httpClient.post( url, usuario)
    .pipe(map( (resp: any) => {

      swal('Usuario creado',usuario.email,'success');
      return resp.usuario;

    }));

  }

  guardarStorage(id: string, token: string, usuario: Usuario) {

    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;

    this.token = token;

  }

  logOut(){
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);

  }

  loginGoogle( token:string ){

    let url = URL_SERVICIOS + '/login/google';

    return this.httpClient.post(url, { token: token })
      .pipe( map( (resp:any) => {

        this.guardarStorage( resp.id, resp.token, resp.usuario );

        console.log( resp );

        return true;

      } ) );

  }

  login( usuario: Usuario, recordar:boolean ){

    if(recordar){
      localStorage.setItem('email', usuario.email );
    }else{
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS + '/login';

    return this.httpClient.post(url,usuario)
        .pipe(map( (resp: any ) => {

          // localStorage.setItem('id', resp.id);
          // localStorage.setItem('token', resp.token);
          // localStorage.setItem('usuario', JSON.stringify( resp.usuario ));

          this.guardarStorage( resp.id, resp.token, resp.usuario );

          return true;

        }));

  }

  actualizarUsuario( usuario: Usuario ){

    let url = URL_SERVICIOS + "/usuario/" + usuario._id;

    url += '?token='+this.token;

    return this.httpClient.put( url, usuario )
    .pipe(map( (resp: any ) => {

      let usuarioDB: Usuario = resp.usuario;

      this.guardarStorage( usuarioDB._id, this.token, usuarioDB );

      swal('USUARIO ACTUALIZADO', usuario.nombre, 'success');

      return true;

    }));

  }

  cambiarImagen( archivo: File, id: string ){

    this.subirArchivo.subirArchivo(archivo, 'usuarios', id )
          .then( (resp: any) => {

            // console.log('RESPONSE -> ', resp);

            this.usuario.img = resp.usuarioActualizado.img;

            // console.log('USUARIO -> ', this.usuario.img);

            swal(' Imagen actualizada ',this.usuario.nombre, 'success' );

            this.guardarStorage( id, this.token, this.usuario );

          })
          .catch( (resp: any) => {

            console.log( resp );

          });

  }

}
