import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioRegistroRequest } from 'src/app/modelos/request/usuario-registro-request';
import { CatalogoResponse } from 'src/app/modelos/response/catalogo-response';
import { CatalogosService } from 'src/app/servicios/catalogo-service';
import { UsuarioService } from 'src/app/servicios/usuario-service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  fgRegistroUsuario!: FormGroup;
  listaCatRolUsuario!: CatalogoResponse[];
  usuarioRegistroRequest = {} as  UsuarioRegistroRequest;

  constructor(private fb: FormBuilder,
              private catRolUsuarioService: CatalogosService,
              private usuarioService: UsuarioService,
              private router: Router
  ){

    this.creaFormRegistroUsuario();
    this.obtenerCatRolUsuario();

  }

  creaFormRegistroUsuario(){
    this.fgRegistroUsuario = this.fb.group({
      nombre: ['', [Validators.required]],
      primerApellido: ['',[Validators.required]],
      segundoApellido: ['', [Validators.maxLength(49)]],
      contrasenia: ['', [Validators.required, Validators.maxLength(10)]],
      correo: ['', [Validators.required, Validators.email, Validators.maxLength(99)]],
      idRol: [0, Validators.required],
    });
  }

  obtenerCatRolUsuario(){
    this.catRolUsuarioService.getCatRolUsuario().subscribe(res =>{

      console.log(res);
      
      this.listaCatRolUsuario = res.datos;

    })
  }

  limpiarForm(){
    this.creaFormRegistroUsuario();
  }

  registraUsuario(){


    this.usuarioRegistroRequest.nombre= this.fgRegistroUsuario.controls['nombre'].value;
    this.usuarioRegistroRequest.apellido_paterno= this.fgRegistroUsuario.controls['primerApellido'].value;
    this.usuarioRegistroRequest.apellido_materno= this.fgRegistroUsuario.controls['segundoApellido'].value;
    this.usuarioRegistroRequest.contrasena=this.fgRegistroUsuario.controls['contrasenia'].value;
    this.usuarioRegistroRequest.correo=this.fgRegistroUsuario.controls['correo'].value;
    this.usuarioRegistroRequest.id_rol_usuario = this.fgRegistroUsuario.controls['idRol'].value;

    this.usuarioService.registro(this.usuarioRegistroRequest).subscribe(res =>{
      alert(res.mensaje);
    })

    this.router.navigate(['admin/usuarios/registro']);
    
    
  }

}
