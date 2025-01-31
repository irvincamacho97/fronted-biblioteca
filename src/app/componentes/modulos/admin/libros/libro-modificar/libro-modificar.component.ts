import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroModificarRequest } from 'src/app/modelos/request/libro-registro-request';
import { LibroResponse } from 'src/app/modelos/response/libro-response';
import { LibroService } from 'src/app/servicios/libro-service';

@Component({
  selector: 'app-libro-modificar',
  templateUrl: './libro-modificar.component.html',
  styleUrls: ['./libro-modificar.component.css']
})
export class LibroModificarComponent {

  idLibro!:number;

  fgModificarLibro!: FormGroup;

  libroResponse = {} as LibroResponse;

  libroModificarRequest = {} as LibroModificarRequest;

    constructor(
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private libroService:LibroService,
      private router: Router
    ){
  
    }

    ngOnInit(): void {
      this.route.params.subscribe((datos) => {
        this.idLibro = datos['idLibro'];
      });
  
      this.creaFormModificarLibro();
      this.obtenerLibro();
    }

    creaFormModificarLibro(){
      this.fgModificarLibro = this.fb.group({
        id_libro: ['', [Validators.required]],
        titulo_libro: ['', [Validators.required]],
        autor_libro: ['',[Validators.required]],
        genero_libro: ['', [Validators.required]],
        anio_libro: ['',[ Validators.required,Validators.pattern('^[0-9]{4}$')]],
      });
    }
    
    obtenerLibro(){
        this.libroService.obtenerLibro(this.idLibro).subscribe(res=>{
          this.libroResponse = res.datos;
          this.fgModificarLibro.patchValue({
            "id_libro":this.libroResponse.id_libro,
            "titulo_libro": this.libroResponse.titulo_libro,
            "autor_libro": this.libroResponse.autor_libro,
            "genero_libro": this.libroResponse.genero_libro,
            "anio_libro": this.libroResponse.anio_libro,
          });
        })
      }

  modificaLibro(){

    const confirmacion = confirm('¿Estás seguro de que quieres actualizar este libro?');
    
    this.libroModificarRequest.id_libro = this.fgModificarLibro.controls['id_libro'].value;
    this.libroModificarRequest.titulo_libro= this.fgModificarLibro.controls['titulo_libro'].value;
    this.libroModificarRequest.autor_libro= this.fgModificarLibro.controls['autor_libro'].value;
    this.libroModificarRequest.genero_libro= this.fgModificarLibro.controls['genero_libro'].value;
    this.libroModificarRequest.anio_libro=this.fgModificarLibro.controls['anio_libro'].value;
    
    if (confirmacion) {
      this.libroService.modificar(this.libroModificarRequest).subscribe(res =>{
        alert(res.mensaje);
        this.router.navigate(['admin/libros']);
      })
    }
    
  }


}
