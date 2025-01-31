import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibroResponse } from 'src/app/modelos/response/libro-response';
import { LibroService } from 'src/app/servicios/libro-service';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent {

  @Input() libro: LibroResponse | null = null; 
  @Output() closeModal = new EventEmitter<void>();

  constructor() {}

  close() {
    this.closeModal.emit();
  }


}
