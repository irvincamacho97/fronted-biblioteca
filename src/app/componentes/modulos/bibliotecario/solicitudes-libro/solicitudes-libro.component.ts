import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaLibroEstatusResponse } from 'src/app/modelos/response/consulta-libro-estatus-response';
import { PaginacionResponse } from 'src/app/modelos/response/paginacion-response';
import { ConsultaLibroService } from 'src/app/servicios/consulta-libro-service';

@Component({
  selector: 'app-solicitudes-libro',
  templateUrl: './solicitudes-libro.component.html',
  styleUrls: ['./solicitudes-libro.component.css']
})
export class SolicitudesLibroComponent {

  paginacionResponseSolicitados!:PaginacionResponse;

  paginacionResponsePrestados!:PaginacionResponse;

  listaConsultaLibrosSolicitados!:ConsultaLibroEstatusResponse [];

  listaConsultaLibrosPrestados!:ConsultaLibroEstatusResponse [];

  paginaActualSolicitado: number = 1;
  paginaActualPrestado: number = 1;
  tamanoPagina: number = 2;

    constructor(
      private consultaLibroService:ConsultaLibroService,
      private router: Router
    ){
  
      this.consultaLibrosSolicitados();
      this.consultaLibrosPrestados();
    }
  
    consultaLibrosSolicitados(){
      this.consultaLibroService.obtenerListaConsulta(1,this.paginaActualSolicitado,this.tamanoPagina).subscribe(res =>{
  
        this.listaConsultaLibrosSolicitados = res.datos.elementos;
  
        this.paginacionResponseSolicitados = res.datos.paginacion;
  
      })
    }

    cambioPaginaSolicitados(pagina: number) {
      this.paginaActualSolicitado = pagina;
      this.consultaLibrosSolicitados();
    }

    consultaLibrosPrestados(){
      this.consultaLibroService.obtenerListaConsulta(2,this.paginaActualPrestado,this.tamanoPagina).subscribe(res =>{
  
        this.listaConsultaLibrosPrestados = res.datos.elementos;
  
        this.paginacionResponsePrestados = res.datos.paginacion;
  
      })
    }

    cambioPaginaPrestados(pagina: number) {
      this.paginaActualPrestado = pagina;
      this.consultaLibrosPrestados();
    }


    actualizaEstatusConsulta(idConsulta:number,idEstatusConsulta:number){
      const confirmacion = confirm('¿Estás seguro de que quieres actualizar el estatus?');
      if (confirmacion) {
        this.consultaLibroService.actualizaEstatusConsulta(idConsulta,idEstatusConsulta).subscribe(res => {
          alert(res.mensaje);
          this.consultaLibrosSolicitados();
          this.consultaLibrosPrestados();
        });
      } else {
        console.log('Actualización cancelada');
      }
    }

}
