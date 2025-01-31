import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibroResgitroRequest } from 'src/app/modelos/request/libro-registro-request';
import { LibroService } from 'src/app/servicios/libro-service';

@Component({
  selector: 'app-libro-registro',
  templateUrl: './libro-registro.component.html',
  styleUrls: ['./libro-registro.component.css']
})
export class LibroRegistroComponent {

  fgRegistroLibro!: FormGroup;
  libroResgistroRequest = {} as LibroResgitroRequest;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private libroService:LibroService
  ){
    this.creaFormRegistroLibro();
  }

  creaFormRegistroLibro(){
    this.fgRegistroLibro = this.fb.group({
      titulo_libro: ['', [Validators.required]],
      autor_libro: ['',[Validators.required]],
      genero_libro: ['', [Validators.required]],
      anio_libro: ['',[ Validators.required,Validators.pattern('^[0-9]{4}$')]],
    });
  }

  limpiarForm(){
    this.creaFormRegistroLibro();
  }

  registraLibro(){


    this.libroResgistroRequest.titulo_libro= this.fgRegistroLibro.controls['titulo_libro'].value;
    this.libroResgistroRequest.autor_libro= this.fgRegistroLibro.controls['autor_libro'].value;
    this.libroResgistroRequest.genero_libro= this.fgRegistroLibro.controls['genero_libro'].value;
    this.libroResgistroRequest.anio_libro= Number(this.fgRegistroLibro.controls['anio_libro'].value);
    
    this.libroService.registro(this.libroResgistroRequest).subscribe(res =>{
      alert(res.mensaje);
    })

    this.router.navigate(['admin/libros']);
    
    
  }

}
