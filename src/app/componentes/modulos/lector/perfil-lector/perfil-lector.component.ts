import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsuarioResponse } from 'src/app/modelos/response/usuario-response';
import { UsuarioService } from 'src/app/servicios/usuario-service';

@Component({
  selector: 'app-perfil-lector',
  templateUrl: './perfil-lector.component.html',
  styleUrls: ['./perfil-lector.component.css']
})
export class PerfilLectorComponent {
  
  @Input() usuarioResponse: UsuarioResponse | null = null; 
  @Output() closeModal = new EventEmitter<void>();

  constructor() {}

  close() {
    this.closeModal.emit();
  }

}
