import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  

  email: string;
  recuerdame: boolean = false;

  auth2: any;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    
    this.email = localStorage.getItem('email') || '';

    if(this.email.length > 1){
      this.recuerdame = true;
    }

    this.googleInit();

  }

  googleInit(){
    gapi.load('auth2', ()=>{
      this.auth2 = gapi.auth2.init({
        client_id: '881688222140-rluf5u2vkukhqjnarnuae6d7a3584ke2.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignIn( document.getElementById('btnGoogle') );
    });
  }

  attachSignIn( element ){

    this.auth2.attachClickHandler( element, {}, ( googleUser )=>{

      let token = googleUser.getAuthResponse().id_token;

      // let profile = googleUser.getBasicProfile();

      this.usuarioService.loginGoogle( token )
        .subscribe( 
          //resp => this.router.navigate(['/customers'])
          
          resp => window.location.href = '/customers'

          // resp => console.log(resp)
         );


    } );

  }

  ingresar( forma: NgForm ){
    // swal('Ingreso correcto','','success');
    // console.log('Valido', forma.valid);
    // console.log('Formulario', forma.value);

    if(forma.invalid){
      return;
    }

    let usuario = new Usuario(
      null,
      forma.value.email,
      forma.value.password,
    );

    this.usuarioService.login(usuario, forma.value.recuerdame)
      .subscribe( resp => this.router.navigate(['/customers']));
      
  }

}
