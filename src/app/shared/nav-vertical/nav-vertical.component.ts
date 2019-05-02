import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-nav-vertical',
  templateUrl: './nav-vertical.component.html',
  styleUrls: ['./nav-vertical.component.css']
})
export class NavVerticalComponent implements OnInit {

  usuario : Usuario;

  constructor(private usuarioService: UsuarioService) {

    this.usuario = usuarioService.usuario;

    console.log( this.usuario );

   }

  ngOnInit() {
  }

  cerrarSesion(){
    this.usuarioService.logOut();
  }

}
