import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PaginacionResponse } from 'src/app/modelos/response/paginacion-response';
import { UsuarioResponse } from 'src/app/modelos/response/usuario-response';
import { UsuarioService } from 'src/app/servicios/usuario-service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  listaUsuario !: UsuarioResponse[];

  paginacionResponse!:PaginacionResponse;

  paginaActual: number = 1;
  tamanoPagina: number = 2;


  constructor(
    private userService:UsuarioService,
    private router: Router
  ){

    this.obtenerListaUsuario();
  }

  obtenerListaUsuario(){
    this.userService.obtenerListaUsuario(this.paginaActual,this.tamanoPagina).subscribe(res =>{

      console.log(res);
      
      this.listaUsuario = res.datos.elementos;

      this.paginacionResponse = res.datos.paginacion;

    })
  }

  cambioPagina(pagina: number) {
    this.paginaActual = pagina;
    this.obtenerListaUsuario();
  }

  routRegistroUsuario(){
    this.router.navigate(['admin/usuarios/registro']);
  }

  eliminaUsuario(idUsuario: number) {
    const confirmacion = confirm('¿Estás seguro de que quieres eliminar este usuario?');
  
    if (confirmacion) {
      this.userService.elimina(idUsuario).subscribe(res => {
        alert(res.mensaje);
        this.obtenerListaUsuario();
      });
    } else {
      console.log('Eliminación cancelada');
    }
  }

  editarUsuario(idUser: number) {
    console.log("Editar Usuario:", idUser);
    this.router.navigate([`admin/usuarios/modificar/${idUser}`]);

  }

}
