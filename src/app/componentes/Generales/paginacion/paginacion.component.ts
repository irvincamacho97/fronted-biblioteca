import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginacionResponse } from 'src/app/modelos/response/paginacion-response';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.css']
})
export class PaginacionComponent {

  @Input() paginacion!: PaginacionResponse;
  @Output() cambioPaginaEvent = new EventEmitter<number>();
  @Output() cambioNumRegistrosEvent = new EventEmitter<number>();

    get paginasMostrar(): number[] {
      let totalPaginas = this.paginacion.total_paginas;
      let paginaActual = this.paginacion.num_pag;
      const inicio = Math.max(1, paginaActual - 4);
      const final = Math.min(totalPaginas, paginaActual + 9);
      return Array.from({ length: final - inicio + 1 }, (_, i) => inicio + i);
    }
    
    cambioPagina(pagina: number) {
      this.cambioPaginaEvent.emit(pagina);
    }
  
    cambioNumReg(numReg: number) {
      this.cambioNumRegistrosEvent.emit(numReg);
    }

}
