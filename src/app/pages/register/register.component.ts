import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

import swal from 'sweetalert';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor( private usuarioService: UsuarioService, private router: Router ) { }

  matchPassword( campo1: string, campo2: string ){

    return ( group: FormGroup ) => {

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if( pass1 === pass2 ){
        return null;
      }

      return {
        sonIguales: true
      };

    };
  }

  ngOnInit() {


    this.forma = new FormGroup({
      nombre: new FormControl( null, Validators.required ),
      correo: new FormControl( null, [Validators.required, Validators.email] ),
      password: new FormControl( null, Validators.required ),
      password2: new FormControl( null, Validators.required ),
      condiciones: new FormControl( false ),
    }, { validators: this.matchPassword('password', 'password2') });


    //forma ejemplo para llenar campos
    this.forma.setValue({
      nombre: 'Ammy Aguilar',
      correo: 'ammy@gmail.com',
      password: '147258',
      password2: '147258',
      condiciones: true
    });
  }

  registrarUsuario(){

    if( this.forma.invalid ){
      return;
    }

    if( !this.forma.value.condiciones ){
      swal("Debe aceptar las condiciones!", "","warning");
      return;
    }

    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password
    );

    this.usuarioService.crearUsuario(usuario)
        .subscribe( resp => {

          this.router.navigate(['/login']);
        });


    // console.log('Forma válida', this.forma.valid);

    // console.log(this.forma.value);
  }

}
