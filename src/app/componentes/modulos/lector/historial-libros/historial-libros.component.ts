import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaLibroEstatusResponse } from 'src/app/modelos/response/consulta-libro-estatus-response';
import { LibroResponse } from 'src/app/modelos/response/libro-response';
import { PaginacionResponse } from 'src/app/modelos/response/paginacion-response';
import { ConsultaLibroService } from 'src/app/servicios/consulta-libro-service';
import { LibroService } from 'src/app/servicios/libro-service';

@Component({
  selector: 'app-historial-libros',
  templateUrl: './historial-libros.component.html',
  styleUrls: ['./historial-libros.component.css']
})
export class HistorialLibrosComponent {

    listaLibro!: ConsultaLibroEstatusResponse[];
    
    paginacionResponse!:PaginacionResponse;
      
    paginaActual: number = 1;
    
    tamanoPagina: number = 2;

    constructor(
      private consiltaLibroService:ConsultaLibroService
    ){
      this.obtenerListaLibros();
    }

    obtenerListaLibros(){
      this.consiltaLibroService.obtenerListaPrestado(5,this.paginaActual,this.tamanoPagina).subscribe(res =>{
    
        console.log(res);
        
        this.listaLibro = res.datos.elementos;
    
        this.paginacionResponse = res.datos.paginacion;
    
      })
    }

    cambioPagina(pagina: number) {
      this.paginaActual = pagina;
      this.obtenerListaLibros();
    }

}
