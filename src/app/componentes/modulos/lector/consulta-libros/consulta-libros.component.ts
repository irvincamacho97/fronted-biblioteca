import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LibroResponse } from 'src/app/modelos/response/libro-response';
import { PaginacionResponse } from 'src/app/modelos/response/paginacion-response';
import { LibroService } from 'src/app/servicios/libro-service';
import { DetalleLibroComponent } from '../detalle-libro/detalle-libro.component';
import { SolicitudLibroRequest } from 'src/app/modelos/request/solicitud-libro-request';
import { ConsultaLibroService } from 'src/app/servicios/consulta-libro-service';
import { UsuarioResponse } from 'src/app/modelos/response/usuario-response';
import { UsuarioService } from 'src/app/servicios/usuario-service';

@Component({
  selector: 'app-consulta-libros',
  templateUrl: './consulta-libros.component.html',
  styleUrls: ['./consulta-libros.component.css']
})
export class ConsultaLibrosComponent {

  listaLibro!: LibroResponse[];
  
  paginacionResponse!:PaginacionResponse;
    
  paginaActual: number = 1;
  
  tamanoPagina: number = 2;

  libroResponse = {} as LibroResponse;

  mostrarModal = false;

  mostrarModalPerfil = false;

  solicituLibroRequest= {} as SolicitudLibroRequest

  usuarioResponse =  {} as UsuarioResponse

  constructor(
    private libroService:LibroService,
    private router: Router,
    private consiltaLibroService:ConsultaLibroService,
    private usuarioService: UsuarioService,
  ){
    this.obtenerListaLibros();
    this.obtenerUsuario();
  }
  
  obtenerListaLibros(){
    this.libroService.obtenerListaLibros(this.paginaActual,this.tamanoPagina).subscribe(res =>{
  
      console.log(res);
      
      this.listaLibro = res.datos.elementos;
  
      this.paginacionResponse = res.datos.paginacion;
  
    })
  }

  cambioPagina(pagina: number) {
    this.paginaActual = pagina;
    this.obtenerListaLibros();
  }

  routHistorialPrestados(){
    this.router.navigate(['lector/historial']);
  }

  solicitaLibro(idLibro:number){


    this.solicituLibroRequest.id_libro=idLibro;
    
    this.solicituLibroRequest.id_usuario_consulta=5

    this.consiltaLibroService.solicitaLibro(this.solicituLibroRequest).subscribe(res =>{
      alert(res.mensaje);
      
    })
  }

  verDetalleLibro(idLibro: number): void {
    this.libroService.obtenerLibro(idLibro).subscribe((res) => {
      this.libroResponse = res.datos;
      this.mostrarModal = true;
    });
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this,this.mostrarModalPerfil = false;
    this.libroResponse = {} as LibroResponse;
  }

  obtenerUsuario(){
    this.usuarioService.obtenerUsuario(5).subscribe(res=>{
      this.usuarioResponse = res.datos;
    })
  }

  verDatosPerfil(){
    this.mostrarModalPerfil = true;
  }

}
