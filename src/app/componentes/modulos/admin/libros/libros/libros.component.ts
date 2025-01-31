import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LibroResponse } from 'src/app/modelos/response/libro-response';
import { PaginacionResponse } from 'src/app/modelos/response/paginacion-response';
import { LibroService } from 'src/app/servicios/libro-service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {

listaLibro!: LibroResponse[];

paginacionResponse!:PaginacionResponse;
  
paginaActual: number = 1;

tamanoPagina: number = 2;

constructor(
  private libroService:LibroService,
  private router: Router
){
  this.obtenerListaLibros();
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

routRegistroLibro(){
  this.router.navigate(['admin/libros/registro']);
}

eliminaUsuario(idLibro: number) {
  const confirmacion = confirm('¿Estás seguro de que quieres eliminar este libro?');

  if (confirmacion) {
    this.libroService.elimina(idLibro).subscribe(res => {
      alert(res.mensaje);
      this.obtenerListaLibros();
    });
  } else {
    console.log('Eliminación cancelada');
  }
}

editarUsuario(idLibro: number) {
  
  this.router.navigate([`admin/libros/modificar/${idLibro}`]);

}

}
