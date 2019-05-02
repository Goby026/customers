import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  usuario: Usuario;

  constructor( private usuarioService: UsuarioService ) { }

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
  }

}
